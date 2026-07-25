import { useEffect, useRef, useState } from 'react';

function createNoiseBuffer(context, duration = 2) {
  const buffer = context.createBuffer(1, context.sampleRate * duration, context.sampleRate);
  const channel = buffer.getChannelData(0);
  for (let i = 0; i < channel.length; i += 1) {
    channel[i] = (Math.random() * 2) - 1;
  }
  return buffer;
}

function now(context) {
  return context.currentTime;
}

export default function ShireAmbienceToggle() {
  const [playing, setPlaying] = useState(false);
  const nodesRef = useRef(null);
  const timerRef = useRef(null);

  const stop = async () => {
    const nodes = nodesRef.current;
    if (!nodes) return;

    if (timerRef.current) {
      clearInterval(timerRef.current);
      timerRef.current = null;
    }

    try {
      nodes.osc1.stop();
      nodes.osc2.stop();
      nodes.noise.stop();
      nodes.bell1.stop();
      nodes.bell2.stop();
      await nodes.context.close();
    } catch {
      // Ignore cleanup errors when the context already ended.
    }

    nodesRef.current = null;
    setPlaying(false);
  };

  const start = async () => {
    if (nodesRef.current) return;

    const AudioContext = window.AudioContext || window.webkitAudioContext;
    if (!AudioContext) return;

    const context = new AudioContext();
    const master = context.createGain();
    master.gain.value = 0.035;
    master.connect(context.destination);

    const breeze = context.createGain();
    breeze.gain.value = 0.55;
    breeze.connect(master);

    const water = context.createGain();
    water.gain.value = 0.36;
    water.connect(master);

    const bellBus = context.createGain();
    bellBus.gain.value = 0.55;
    bellBus.connect(master);

    const pad1 = context.createOscillator();
    pad1.type = 'sine';
    pad1.frequency.value = 174.61;
    const pad1Gain = context.createGain();
    pad1Gain.gain.value = 0.72;
    pad1.connect(pad1Gain);
    pad1Gain.connect(breeze);

    const pad2 = context.createOscillator();
    pad2.type = 'triangle';
    pad2.frequency.value = 220;
    const pad2Gain = context.createGain();
    pad2Gain.gain.value = 0.48;
    pad2.connect(pad2Gain);
    pad2Gain.connect(breeze);

    const lfo = context.createOscillator();
    lfo.type = 'sine';
    lfo.frequency.value = 0.055;
    const lfoGain = context.createGain();
    lfoGain.gain.value = 0.005;
    lfo.connect(lfoGain);
    lfoGain.connect(master.gain);

    const noise = context.createBufferSource();
    noise.buffer = createNoiseBuffer(context, 2.5);
    noise.loop = true;
    const filter = context.createBiquadFilter();
    filter.type = 'lowpass';
    filter.frequency.value = 560;
    filter.Q.value = 0.35;
    const noiseGain = context.createGain();
    noiseGain.gain.value = 0.36;
    noise.connect(filter);
    filter.connect(noiseGain);
    noiseGain.connect(water);

    const waterLfo = context.createOscillator();
    waterLfo.type = 'sine';
    waterLfo.frequency.value = 0.11;
    const waterDepth = context.createGain();
    waterDepth.gain.value = 0.02;
    waterLfo.connect(waterDepth);
    waterDepth.connect(noiseGain.gain);

    const bell1 = context.createOscillator();
    bell1.type = 'sine';
    bell1.frequency.value = 523.25;
    const bell1Gain = context.createGain();
    bell1Gain.gain.value = 0;
    bell1.connect(bell1Gain);
    bell1Gain.connect(bellBus);

    const bell2 = context.createOscillator();
    bell2.type = 'triangle';
    bell2.frequency.value = 659.25;
    const bell2Gain = context.createGain();
    bell2Gain.gain.value = 0;
    bell2.connect(bell2Gain);
    bell2Gain.connect(bellBus);

    const t0 = now(context);
    pad1.start(t0);
    pad2.start(t0);
    lfo.start(t0);
    noise.start(t0);
    waterLfo.start(t0);
    bell1.start(t0);
    bell2.start(t0);

    const pulseBell = () => {
      const t = now(context);
      bell1Gain.gain.cancelScheduledValues(t);
      bell2Gain.gain.cancelScheduledValues(t);
      bell1Gain.gain.setValueAtTime(0.0001, t);
      bell1Gain.gain.exponentialRampToValueAtTime(0.065, t + 0.03);
      bell1Gain.gain.exponentialRampToValueAtTime(0.0001, t + 1.4);
      bell2Gain.gain.setValueAtTime(0.0001, t + 0.25);
      bell2Gain.gain.exponentialRampToValueAtTime(0.045, t + 0.3);
      bell2Gain.gain.exponentialRampToValueAtTime(0.0001, t + 1.6);
    };

    pulseBell();
    timerRef.current = setInterval(pulseBell, 4200);

    nodesRef.current = {
      context,
      osc1: pad1,
      osc2: pad2,
      noise,
      lfo,
      waterLfo,
      bell1,
      bell2,
    };

    setPlaying(true);
  };

  const toggle = async () => {
    if (playing) {
      await stop();
      return;
    }

    await start();
  };

  useEffect(() => () => {
    void stop();
  }, []);

  return (
    <button type="button" className="shire-ambience-toggle" onClick={toggle} aria-pressed={playing}>
      <span className="shire-ambience-toggle-dot" aria-hidden="true" />
      {playing ? 'Pause music' : 'Wake the music'}
    </button>
  );
}

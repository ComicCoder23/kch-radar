import { SignedIn, SignedOut, useUser } from "@clerk/clerk-react";
import { useState } from "react";
import axios from "axios";

export default function SubmitSignalForm() {
  const { user } = useUser();
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [formData, setFormData] = useState({
    title: "",
    note: "",
    category: "Community",
    town: "Kirkintilloch",
    address: "",
    date: "",
    startTime: "",
    endTime: "",
    section: "Local Signals Feed",
    cardType: "Signal"
  });

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    // Combine date and times for the backend date field if needed, 
    // or just send as-is since the schema is flexible (strings)
    const payload = {
      ...formData,
      date: `${formData.date} // ${formData.startTime} - ${formData.endTime}`.trim()
    };
    try {
      await axios.post("http://localhost:5000/api/signals", payload);
      setSubmitted(true);
    } catch (error) {
      console.error("Error submitting signal:", error);
      alert("Failed to submit signal. Is the backend running?");
    } finally {
      setLoading(false);
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  return (
    <section style={{ padding: '24px 0 8px' }}>
      <div className="radar-card" style={{ padding: '32px' }}>
        <div style={{ fontSize: '12px', textTransform: 'uppercase', letterSpacing: '0.2em', color: 'var(--secondary)', fontWeight: 700 }}>
           System Intake
        </div>
        <h2 style={{ margin: '6px 0 16px', fontSize: '32px', fontWeight: 800 }}>Submit a Signal</h2>
        
        <SignedOut>
          <p style={{ color: '#94a3b8', maxWidth: '720px' }}>
            Local organisers and community groups can broadcast events to the radar. 
            <strong> Please Sign In to transmit a signal.</strong>
          </p>
        </SignedOut>

        <SignedIn>
          {submitted ? (
            <div style={{ padding: '20px', background: 'rgba(16, 185, 129, 0.1)', color: 'var(--secondary)', borderRadius: '12px', border: '1px solid rgba(16, 185, 129, 0.2)' }}>
              Transmission Received. Your signal is now live on the G66 radar.
            </div>
          ) : (
            <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '16px', marginTop: '16px' }}>
              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '16px' }}>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
                  <label className="mono" style={{ fontSize: '11px', color: 'var(--muted)' }}>SIGNAL TITLE</label>
                  <input 
                    type="text" 
                    name="title"
                    placeholder="e.g. Open Mic at McGinley's" 
                    required 
                    value={formData.title}
                    onChange={handleChange}
                    style={{ padding: '12px', borderRadius: '8px', border: '1px solid var(--border)', background: 'rgba(0,0,0,0.2)', color: '#fff' }} 
                  />
                </div>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
                  <label className="mono" style={{ fontSize: '11px', color: 'var(--muted)' }}>LOCATION / ADDRESS</label>
                  <input 
                    type="text" 
                    name="address"
                    placeholder="e.g. 123 Cowgate, Kirkintilloch" 
                    required 
                    value={formData.address}
                    onChange={handleChange}
                    style={{ padding: '12px', borderRadius: '8px', border: '1px solid var(--border)', background: 'rgba(0,0,0,0.2)', color: '#fff' }} 
                  />
                </div>
              </div>

              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr 1fr', gap: '16px' }}>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
                  <label className="mono" style={{ fontSize: '11px', color: 'var(--muted)' }}>DATE</label>
                  <input 
                    type="text" 
                    name="date"
                    placeholder="e.g. Friday, May 22" 
                    required 
                    value={formData.date}
                    onChange={handleChange}
                    style={{ padding: '12px', borderRadius: '8px', border: '1px solid var(--border)', background: 'rgba(0,0,0,0.2)', color: '#fff' }} 
                  />
                </div>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
                  <label className="mono" style={{ fontSize: '11px', color: 'var(--muted)' }}>START TIME</label>
                  <input 
                    type="text" 
                    name="startTime"
                    placeholder="e.g. 19:00" 
                    value={formData.startTime}
                    onChange={handleChange}
                    style={{ padding: '12px', borderRadius: '8px', border: '1px solid var(--border)', background: 'rgba(0,0,0,0.2)', color: '#fff' }} 
                  />
                </div>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
                  <label className="mono" style={{ fontSize: '11px', color: 'var(--muted)' }}>END TIME</label>
                  <input 
                    type="text" 
                    name="endTime"
                    placeholder="e.g. 23:30" 
                    value={formData.endTime}
                    onChange={handleChange}
                    style={{ padding: '12px', borderRadius: '8px', border: '1px solid var(--border)', background: 'rgba(0,0,0,0.2)', color: '#fff' }} 
                  />
                </div>
              </div>

              <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
                <label className="mono" style={{ fontSize: '11px', color: 'var(--muted)' }}>INTEL / DESCRIPTION</label>
                <textarea 
                  name="note"
                  placeholder="What's happening? (e.g. Acoustic sets, all welcome, sober-friendly atmosphere...)" 
                  required 
                  value={formData.note}
                  onChange={handleChange}
                  style={{ padding: '12px', borderRadius: '8px', border: '1px solid var(--border)', background: 'rgba(0,0,0,0.2)', color: '#fff', minHeight: '80px' }} 
                />
              </div>

              <button 
                type="submit" 
                disabled={loading}
                style={{ 
                  padding: '16px', 
                  background: loading ? 'var(--muted)' : 'var(--primary)', 
                  color: '#fff', 
                  border: 'none', 
                  borderRadius: '12px', 
                  cursor: loading ? 'not-allowed' : 'pointer',
                  fontWeight: '800',
                  fontSize: '14px',
                  letterSpacing: '0.1em',
                  boxShadow: '0 4px 12px rgba(59, 130, 246, 0.3)'
                }}
              >
                {loading ? "TRANSMITTING..." : "BROADCAST SIGNAL"}
              </button>
            </form>
          )}
        </SignedIn>
      </div>
    </section>
  );
}

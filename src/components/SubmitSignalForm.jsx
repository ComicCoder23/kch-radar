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

  const inputStyle = { 
    padding: '12px', 
    borderRadius: '4px', 
    border: '1px solid var(--kch-border)', 
    background: '#ffffff', 
    color: 'var(--kch-primary-text)',
    fontSize: '15px',
    fontFamily: 'Inter, sans-serif'
  };

  const labelStyle = { fontSize: '11px', color: 'var(--kch-text-sub)', fontWeight: 700, letterSpacing: '0.05em', fontFamily: 'Inter, sans-serif' };

  return (
    <section style={{ padding: '24px 0 8px' }}>
      <div className="radar-card" style={{ padding: '32px', fontFamily: 'Inter, sans-serif' }}>
        <div style={{ fontSize: '12px', textTransform: 'uppercase', letterSpacing: '0.2em', color: 'var(--kch-text-sub)', fontWeight: 700 }}>
           System Intake
        </div>
        <h2 style={{ margin: '6px 0 16px', fontSize: '32px', fontWeight: 800 }}>Broadcast Signal</h2>
        
        <SignedOut>
          <p style={{ color: 'var(--kch-text-sub)', maxWidth: '720px' }}>
            Local organisers and community groups can broadcast events to the radar. 
            <strong> Please Sign In to transmit a signal.</strong>
          </p>
        </SignedOut>

        <SignedIn>
          {submitted ? (
            <div style={{ padding: '20px', background: 'rgba(45, 106, 79, 0.1)', color: 'var(--kch-campsie-green)', borderRadius: '8px', border: '1px solid rgba(45, 106, 79, 0.2)' }}>
              Transmission Received. Your signal is now live on the G66 radar.
            </div>
          ) : (
            <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '20px', marginTop: '24px' }}>
              <div style={{ display: 'grid', gridTemplateColumns: '1fr', gap: '20px', '@media (min-width: 640px)': { gridTemplateColumns: '1fr 1fr' } }}>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
                  <label style={labelStyle}>SIGNAL TITLE</label>
                  <input type="text" name="title" placeholder="e.g. Community Garden Day" required value={formData.title} onChange={handleChange} style={inputStyle} />
                </div>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
                  <label style={labelStyle}>LOCATION / ADDRESS</label>
                  <input type="text" name="address" placeholder="e.g. 123 Cowgate" required value={formData.address} onChange={handleChange} style={inputStyle} />
                </div>
              </div>

              <div style={{ display: 'grid', gridTemplateColumns: '1fr', gap: '20px', '@media (min-width: 640px)': { gridTemplateColumns: '1fr 1fr 1fr' } }}>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
                  <label style={labelStyle}>DATE</label>
                  <input type="text" name="date" placeholder="e.g. 2026-05-10" required value={formData.date} onChange={handleChange} style={inputStyle} />
                </div>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
                  <label style={labelStyle}>START TIME</label>
                  <input type="text" name="startTime" placeholder="e.g. 10:00 AM" value={formData.startTime} onChange={handleChange} style={inputStyle} />
                </div>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
                  <label style={labelStyle}>END TIME</label>
                  <input type="text" name="endTime" placeholder="e.g. 02:00 PM" value={formData.endTime} onChange={handleChange} style={inputStyle} />
                </div>
              </div>

              <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
                <label style={labelStyle}>INTEL / DESCRIPTION</label>
                <textarea name="note" placeholder="Provide event details here..." required value={formData.note} onChange={handleChange} style={{ ...inputStyle, minHeight: '120px' }} />
              </div>

              <button 
                type="submit" 
                disabled={loading}
                style={{ 
                  padding: '16px', 
                  background: 'var(--kch-primary)', 
                  color: '#fff', 
                  border: 'none', 
                  borderRadius: '4px', 
                  cursor: loading ? 'not-allowed' : 'pointer',
                  fontWeight: '700',
                  fontSize: '15px',
                  letterSpacing: '0.1em',
                  fontFamily: 'Inter, sans-serif'
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

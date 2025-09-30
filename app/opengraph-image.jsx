import { ImageResponse } from 'next/og';

export const runtime = 'edge';
export const size = { width: 1200, height: 630 };
export const contentType = 'image/png';

export default function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          height: '100%',
          width: '100%',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          padding: 64,
          background: 'linear-gradient(135deg, #0f172a 0%, #0b3a30 45%, #0e766e 100%)',
        }}
      >
        <div
          style={{
            display: 'inline-flex',
            borderRadius: 16,
            border: '1px solid rgba(255,255,255,0.18)',
            background: 'rgba(255,255,255,0.08)',
            padding: '8px 14px',
            color: '#c7f9e2',
            fontSize: 24,
            marginBottom: 16,
          }}
        >
          Data Analyst • Dashboard Storyteller
        </div>
        <div style={{ fontSize: 72, fontWeight: 800, color: 'white', lineHeight: 1.1 }}>
          Tarun Asrani
        </div>
        <div style={{ fontSize: 48, fontWeight: 700, color: '#99f6e4', lineHeight: 1.2, marginTop: 4 }}>
          Data Maverick
        </div>
      </div>
    ),
    { ...size }
  );
}

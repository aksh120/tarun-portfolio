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
          background: 'linear-gradient(135deg, #312e81 0%, #7c3aed 50%, #f472b6 100%)',
        }}
      >
        <div
          style={{
            display: 'inline-flex',
            borderRadius: 16,
            border: '1px solid rgba(255,255,255,0.18)',
            background: 'rgba(255,255,255,0.10)',
            padding: '8px 14px',
            color: '#e9d5ff',
            fontSize: 24,
            marginBottom: 16,
          }}
        >
          Case Study
        </div>
        <div style={{ fontSize: 64, fontWeight: 800, color: 'white', lineHeight: 1.1 }}>
          Meta Financial Analysis
        </div>
        <div style={{ fontSize: 34, fontWeight: 600, color: '#fef3c7', lineHeight: 1.2, marginTop: 8 }}>
          AI/AR Division Performance • 2021–2023
        </div>
        <div style={{ position: 'absolute', bottom: 32, right: 48, color: 'white', fontSize: 28, fontWeight: 700 }}>
          Tarun Asrani
        </div>
      </div>
    ),
    { ...size }
  );
}

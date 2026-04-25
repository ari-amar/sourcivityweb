"use client"

import { useState } from "react"
import Image from "next/image"

const RFQ_STATS = [
  { value: "24", label: "Total RFQs" },
  { value: "11", label: "Pending" },
  { value: "3", label: "Overdue" },
  { value: "71%", label: "Response Rate" },
  { value: "2.4d", label: "Avg Response" },
  { value: "5", label: "Today's Follow-ups" },
]

type RFQStatus = "quote_received" | "follow_up_1" | "responded" | "overdue" | "sent" | "follow_up_2"

const RFQ_ROWS: {
  query: string
  parts: string
  supplier: string
  email: string
  status: RFQStatus
  statusLabel: string
  statusColor: string
  sent: string
  followUps: number
}[] = [
  {
    query: "precision linear bearing 12mm",
    parts: "LM12UU, LM12LUU",
    supplier: "Thomson Industries",
    email: "sales@thomson.com",
    status: "quote_received",
    statusLabel: "Quote Received",
    statusColor: "#10b981",
    sent: "2d ago",
    followUps: 1,
  },
  {
    query: "pneumatic cylinder 50mm bore",
    parts: "ISO 15552 DNC-50-100",
    supplier: "Festo USA",
    email: "rfq@festo.com",
    status: "follow_up_1",
    statusLabel: "Follow-up 1",
    statusColor: "#f59e0b",
    sent: "5d ago",
    followUps: 1,
  },
  {
    query: "brushless DC motor 24V 200W",
    parts: "EC-i 40, REX 25",
    supplier: "Maxon Group",
    email: "orders@maxon.com",
    status: "responded",
    statusLabel: "Responded",
    statusColor: "#3b82f6",
    sent: "7d ago",
    followUps: 0,
  },
  {
    query: "M8 stainless socket head screw",
    parts: "DIN 912 A2-70",
    supplier: "Bossard USA",
    email: "info@bossard.com",
    status: "overdue",
    statusLabel: "Overdue",
    statusColor: "#ef4444",
    sent: "12d ago",
    followUps: 2,
  },
  {
    query: "SMC solenoid valve 5/2 way",
    parts: "SY5120-5LZD-01",
    supplier: "SMC Corporation",
    email: "smc@smcusa.com",
    status: "sent",
    statusLabel: "Sent",
    statusColor: "#6b7280",
    sent: "1d ago",
    followUps: 0,
  },
]

const STATUS_ICONS: Record<RFQStatus, string> = {
  quote_received: "✓",
  responded: "✓",
  overdue: "⚠",
  follow_up_1: "↩",
  sent: "→",
  follow_up_2: "↩",
}

export function MessagesDashboardSection() {
  const [filter, setFilter] = useState<"all" | RFQStatus>("all")
  const [search, setSearch] = useState("")
  const [selected, setSelected] = useState<number | null>(null)

  const filtered = RFQ_ROWS.filter(
    (r) =>
      (filter === "all" || r.status === filter) &&
      (search === "" ||
        r.query.toLowerCase().includes(search.toLowerCase()) ||
        r.supplier.toLowerCase().includes(search.toLowerCase()))
  )

  return (
    <section
      id="dashboard"
      style={{
        padding: "100px 24px",
        background: "#050508",
        position: "relative",
        overflow: "hidden",
        color: "#f0f0f8",
        fontFamily: "'Space Grotesk', sans-serif",
      }}
    >
      <div
        style={{
          position: "absolute",
          top: 0,
          right: 0,
          width: 500,
          height: 400,
          background: "radial-gradient(ellipse at 100% 0%, rgba(0,183,235,0.05) 0%, transparent 60%)",
          pointerEvents: "none",
        }}
      />
      <div style={{ maxWidth: 1100, margin: "0 auto", position: "relative" }}>
        <div style={{ textAlign: "center", marginBottom: 56 }}>
          <div
            style={{
              display: "inline-block",
              padding: "5px 14px",
              borderRadius: 100,
              marginBottom: 16,
              background: "rgba(0,183,235,0.08)",
              border: "1px solid rgba(0,183,235,0.2)",
              fontSize: 12,
              fontWeight: 600,
              color: "#00b7eb",
              letterSpacing: "0.08em",
              textTransform: "uppercase",
            }}
          >
            RFQ Dashboard
          </div>
          <h2
            style={{
              fontSize: "clamp(28px, 4vw, 48px)",
              fontWeight: 700,
              letterSpacing: "-0.025em",
              marginBottom: 16,
            }}
          >
            Track every quote, automatically
          </h2>
          <p style={{ fontSize: 17, color: "#6b7280", maxWidth: 500, margin: "0 auto" }}>
            Monitor RFQ status, follow-ups, and supplier responses — all in one place.
          </p>
        </div>

        <div
          style={{
            background: "#111118",
            border: "1px solid #2a2a38",
            borderRadius: 20,
            overflow: "hidden",
            boxShadow: "0 40px 100px rgba(0,0,0,0.6)",
          }}
        >
          <div
            style={{
              padding: "12px 20px",
              borderBottom: "1px solid #1e1e28",
              background: "#16161e",
              display: "flex",
              alignItems: "center",
              gap: 10,
            }}
          >
            <Image
              src="/sourcivity-logo.png"
              alt=""
              width={20}
              height={20}
              style={{ width: 20, height: 20, objectFit: "contain" }}
            />
            <span
              style={{
                fontSize: 14,
                fontWeight: 700,
                letterSpacing: "-0.01em",
                backgroundImage: "linear-gradient(120deg,#fff 40%,#00b7eb)",
                WebkitBackgroundClip: "text",
                backgroundClip: "text",
                WebkitTextFillColor: "transparent",
                color: "transparent",
              }}
            >
              Sourcivity
            </span>
            <div style={{ marginLeft: "auto", display: "flex", gap: 8, fontSize: 12, color: "#6b7280" }}>
              <span
                style={{
                  padding: "4px 12px",
                  borderRadius: 6,
                  background: "rgba(0,183,235,0.1)",
                  color: "#00b7eb",
                  fontWeight: 600,
                  fontSize: 11,
                }}
              >
                RFQ Dashboard
              </span>
            </div>
          </div>

          <div style={{ padding: "24px" }}>
            <div
              style={{
                display: "grid",
                gridTemplateColumns: "repeat(6,1fr)",
                gap: 12,
                marginBottom: 24,
              }}
            >
              {RFQ_STATS.map((s, i) => (
                <div
                  key={i}
                  style={{
                    background: "#16161e",
                    border: "1px solid #1e1e28",
                    borderRadius: 10,
                    padding: "14px 12px",
                    textAlign: "center",
                  }}
                >
                  <div
                    style={{
                      fontSize: 22,
                      fontWeight: 700,
                      fontFamily: "'Space Mono', monospace",
                      backgroundImage: "linear-gradient(135deg, #00b7eb, #60d8ff)",
                      WebkitBackgroundClip: "text",
                      backgroundClip: "text",
                      WebkitTextFillColor: "transparent",
                      color: "transparent",
                      marginBottom: 4,
                    }}
                  >
                    {s.value}
                  </div>
                  <div style={{ fontSize: 11, color: "#6b7280", lineHeight: 1.3 }}>{s.label}</div>
                </div>
              ))}
            </div>

            <div
              style={{
                display: "flex",
                alignItems: "center",
                gap: 12,
                marginBottom: 16,
                padding: "12px 16px",
                background: "#16161e",
                borderRadius: 10,
                border: "1px solid #1e1e28",
              }}
            >
              <span style={{ fontSize: 12, color: "#6b7280", whiteSpace: "nowrap" }}>Status:</span>
              <select
                value={filter}
                onChange={(e) => setFilter(e.target.value as "all" | RFQStatus)}
                style={{
                  fontSize: 12,
                  color: "#f0f0f8",
                  background: "#111118",
                  border: "1px solid #2a2a38",
                  borderRadius: 6,
                  padding: "4px 8px",
                  cursor: "pointer",
                }}
              >
                <option value="all">All</option>
                <option value="sent">Sent</option>
                <option value="follow_up_1">Follow-up 1</option>
                <option value="overdue">Overdue</option>
                <option value="responded">Responded</option>
                <option value="quote_received">Quote Received</option>
              </select>
              <input
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                placeholder="Search RFQs…"
                style={{
                  flex: 1,
                  maxWidth: 220,
                  fontSize: 12,
                  color: "#f0f0f8",
                  background: "#111118",
                  border: "1px solid #2a2a38",
                  borderRadius: 6,
                  padding: "5px 10px",
                  outline: "none",
                }}
              />
            </div>

            <div
              style={{
                background: "#16161e",
                border: "1px solid #1e1e28",
                borderRadius: 10,
                overflow: "hidden",
              }}
            >
              <div
                style={{
                  display: "grid",
                  gridTemplateColumns: "2fr 1.2fr 1fr 80px 70px 120px",
                  padding: "10px 16px",
                  borderBottom: "1px solid #1e1e28",
                  background: "rgba(255,255,255,0.03)",
                }}
              >
                {["Part Query", "Supplier", "Status", "Sent", "Follow-ups", "Actions"].map((h, i) => (
                  <div
                    key={i}
                    style={{
                      fontSize: 11,
                      fontWeight: 700,
                      color: "#4a4a5a",
                      letterSpacing: "0.06em",
                      textTransform: "uppercase",
                    }}
                  >
                    {h}
                  </div>
                ))}
              </div>

              {filtered.map((r, i) => (
                <div
                  key={i}
                  style={{
                    display: "grid",
                    gridTemplateColumns: "2fr 1.2fr 1fr 80px 70px 120px",
                    padding: "12px 16px",
                    borderBottom: i < filtered.length - 1 ? "1px solid #1e1e28" : "none",
                    alignItems: "center",
                    cursor: "pointer",
                    transition: "background 0.15s",
                    background: selected === i ? "rgba(0,183,235,0.04)" : "transparent",
                  }}
                  onMouseEnter={(e) => (e.currentTarget.style.background = "rgba(255,255,255,0.03)")}
                  onMouseLeave={(e) =>
                    (e.currentTarget.style.background = selected === i ? "rgba(0,183,235,0.04)" : "transparent")
                  }
                  onClick={() => setSelected(selected === i ? null : i)}
                >
                  <div>
                    <div style={{ fontSize: 13, fontWeight: 600, color: "#f0f0f8", marginBottom: 2 }}>{r.query}</div>
                    <div style={{ fontSize: 11, color: "#6b7280" }}>{r.parts}</div>
                  </div>
                  <div>
                    <div style={{ fontSize: 12, fontWeight: 600, color: "#f0f0f8", marginBottom: 1 }}>{r.supplier}</div>
                    <div style={{ fontSize: 10, color: "#4a4a5a" }}>{r.email}</div>
                  </div>
                  <div>
                    <span
                      style={{
                        display: "inline-flex",
                        alignItems: "center",
                        gap: 4,
                        fontSize: 11,
                        fontWeight: 600,
                        padding: "3px 8px",
                        borderRadius: 5,
                        background: `${r.statusColor}18`,
                        color: r.statusColor,
                        border: `1px solid ${r.statusColor}30`,
                      }}
                    >
                      <span>{STATUS_ICONS[r.status]}</span> {r.statusLabel}
                    </span>
                  </div>
                  <div style={{ fontSize: 12, color: "#6b7280" }}>{r.sent}</div>
                  <div style={{ fontSize: 12, color: "#6b7280", fontFamily: "'Space Mono', monospace" }}>
                    {r.followUps}
                  </div>
                  <div style={{ display: "flex", gap: 6 }}>
                    <button
                      style={{
                        padding: "4px 10px",
                        borderRadius: 5,
                        fontSize: 10,
                        fontWeight: 700,
                        background: "rgba(0,183,235,0.1)",
                        color: "#00b7eb",
                        border: "1px solid rgba(0,183,235,0.2)",
                        cursor: "pointer",
                        whiteSpace: "nowrap",
                      }}
                    >
                      Follow-up
                    </button>
                    <button
                      style={{
                        padding: "4px 8px",
                        borderRadius: 5,
                        fontSize: 10,
                        background: "transparent",
                        color: "#4a4a5a",
                        border: "1px solid #1e1e28",
                        cursor: "pointer",
                        whiteSpace: "nowrap",
                      }}
                    >
                      ···
                    </button>
                  </div>
                </div>
              ))}

              {filtered.length === 0 && (
                <div style={{ padding: "32px", textAlign: "center", color: "#6b7280", fontSize: 13 }}>
                  No RFQs match your filters
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

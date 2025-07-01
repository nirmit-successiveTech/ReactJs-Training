"use client"

import dynamic from "next/dynamic"

const About = dynamic(() => import("@/components/AboutContent"), {
  loading: () => <p>Loading......</p>,
  ssr: false,
})

export default function AboutPage() {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        height: "100vh", // Full viewport height
        textAlign: "center",
      }}
    >
      <div style={{ fontSize: "24px", fontWeight: "bold", marginBottom: "16px" }}>
        About Page
      </div>
      <div>
        <About />
      </div>
    </div>
  )
}

"use client"
import dynamic from "next/dynamic"

const MyContent = dynamic(() => import("@/components/HomeContent"), {
  loading: () => <p>Loading.........</p>,
  ssr: false,
})

export default function Home() {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        height: "100vh",
        textAlign: "center",
      }}
    >
      <div style={{ fontSize: "24px", fontWeight: "bold", marginBottom: "16px" }}>
        Home Page
      </div>

      <div>
        <MyContent />
      </div>
    </div>
  )
}

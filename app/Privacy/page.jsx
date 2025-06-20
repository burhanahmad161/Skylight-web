"use client";

export default function PrivacyPolicy() {
  return (
    <main className="bg-[#0F0F1A] text-gray-200 min-h-screen px-6 py-20">
      <div className="max-w-5xl mx-auto">
        {/* Header */}
        <div className="bg-gradient-to-r from-purple-600 to-purple-700/80 p-10 rounded-3xl shadow-xl mb-14 relative overflow-hidden">
          <h1 className="text-5xl font-bold text-white drop-shadow-md z-10 relative">Privacy Policy</h1>
          <p className="mt-2 text-gray-100 text-sm z-10 relative">Effective Date: June 2, 2025</p>
          <div className="absolute -top-10 -right-10 w-40 h-40 bg-white/10 rounded-full blur-2xl"></div>
          <div className="absolute bottom-0 left-0 w-32 h-32 bg-white/5 rounded-full blur-xl"></div>
        </div>

        {/* Section Wrapper */}
        <div className="space-y-10 text-sm sm:text-base">
          {[
            {
              title: "1. Information We Collect",
              content: (
                <ul className="list-disc list-inside space-y-1">
                  <li><strong>Personal Data:</strong> Name, email, phone number, etc.</li>
                  <li><strong>Usage Info:</strong> IP, browser, device, visit behavior</li>
                  <li><strong>Cookies:</strong> Used for session tracking and personalization</li>
                </ul>
              ),
            },
            {
              title: "2. How We Use Information",
              content: (
                <ul className="list-disc list-inside space-y-1">
                  <li>To provide and improve services</li>
                  <li>To communicate with you regarding updates</li>
                  <li>To personalize user experience and interface</li>
                  <li>To ensure platform security and reliability</li>
                </ul>
              ),
            },
            {
              title: "3. Data Sharing",
              content:
                "We do not sell your data. We may share limited data with trusted partners (e.g., analytics, hosting) under strict confidentiality agreements.",
            },
            {
              title: "4. Your Rights",
              content: (
                <ul className="list-disc list-inside space-y-1">
                  <li>Right to access and correct your data</li>
                  <li>Right to delete or restrict use of your data</li>
                  <li>Right to withdraw consent or unsubscribe</li>
                </ul>
              ),
            },
            {
              title: "5. Data Protection",
              content:
                "Your data is stored with end-to-end encryption and access control. We follow industry standards to keep your data secure.",
            },
            {
              title: "6. Third-Party Links",
              content:
                "External sites linked from SkyLight are not covered by this policy. Always check their privacy terms separately.",
            },
            {
              title: "7. Changes to This Policy",
              content:
                "This policy may be updated from time to time. The updated version will always be posted on this page.",
            },
            {
              title: "8. Contact Us",
              content: (
                <>
                  Have questions? Email us at{" "}
                  <span className="text-purple-400 font-medium">privacy@skylight.com</span>
                </>
              ),
            },
          ].map((section, idx) => (
            <div
              key={idx}
              className="bg-[#1A1A2E] border border-purple-700 p-6 rounded-2xl hover:shadow-purple-500/20 transition duration-300"
            >
              <h2 className="text-lg font-semibold text-purple-400 mb-2">{section.title}</h2>
              <div className="text-gray-300">{section.content}</div>
            </div>
          ))}
        </div>
      </div>
    </main>
  );
}

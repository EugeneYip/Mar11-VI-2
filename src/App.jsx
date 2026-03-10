import { useState } from "react";

const tabs = ["Overview","Five Levels","SPARK & Position","Industry","Meso/Cluster","Macro & Meta","Q2: VRIO/ARK","Q3: ETA/Swatch","Cram Sheet"];

const SectionTitle = ({ children, vn }) => (
  <div className="mb-4">
    <h2 className="text-xl font-bold text-slate-800 border-b-2 border-blue-600 pb-2">{children}</h2>
    {vn && <p className="text-sm text-slate-500 mt-1">{vn}</p>}
  </div>
);

const Card = ({ title, vn, children, color = "blue" }) => {
  const colors = { blue:"border-blue-500 bg-blue-50", green:"border-green-500 bg-green-50", amber:"border-amber-500 bg-amber-50", red:"border-red-500 bg-red-50", purple:"border-purple-500 bg-purple-50", slate:"border-slate-400 bg-slate-50", rose:"border-rose-500 bg-rose-50", cyan:"border-cyan-500 bg-cyan-50" };
  return (
    <div className={`border-l-4 ${colors[color]} p-4 rounded-r-lg mb-4`}>
      {title && <div className="font-bold text-slate-800 mb-1">{title}</div>}
      {vn && <div className="text-xs text-slate-500 mb-2">{vn}</div>}
      <div className="text-sm text-slate-700">{children}</div>
    </div>
  );
};

const Tag = ({ children, color = "blue" }) => {
  const c = { blue:"bg-blue-100 text-blue-800", green:"bg-green-100 text-green-800", amber:"bg-amber-100 text-amber-800", red:"bg-red-100 text-red-800", purple:"bg-purple-100 text-purple-800", slate:"bg-slate-200 text-slate-700", rose:"bg-rose-100 text-rose-800", cyan:"bg-cyan-100 text-cyan-800" };
  return <span className={`${c[color]} text-xs font-semibold px-2 py-0.5 rounded-full`}>{children}</span>;
};

const Arrow = () => <span className="text-slate-400 text-lg mx-1">→</span>;

function Overview() {
  return (<div>
    <SectionTitle vn="Thông tin kỳ thi & Cách viết bài">Exam Info & How to Write</SectionTitle>
    <Card title="Exam Structure (from Practice Exam)" vn="Cấu trúc kỳ thi (từ đề thực hành)" color="blue">
      <div className="grid grid-cols-3 gap-3 mb-3">
        {[{q:"Q1",t:"Five Levels",w:"25%",m:"30 min"},{q:"Q2",t:"VRIO → ARK",w:"25%",m:"30 min"},{q:"Q3",t:"ETA/Swatch",w:"25%",m:"30 min"}].map(x=>(
          <div key={x.q} className="bg-white border rounded-lg p-3 text-center">
            <div className="font-bold text-blue-700 text-lg">{x.q}</div>
            <div className="text-xs font-semibold">{x.t}</div>
            <div className="text-xs text-slate-500">{x.w} · {x.m}</div>
          </div>
        ))}
      </div>
      <div className="bg-amber-50 border border-amber-300 rounded p-2 text-xs">⚠️ Total = 75%. Expect a <strong>4th unseen question (25%)</strong>.</div>
    </Card>
    <Card title="The Single Governing Logic" vn="Logic chủ đạo duy nhất của khóa học" color="green">
      <div className="bg-white rounded-lg p-4 text-center border">
        <div className="text-lg font-bold text-green-800 mb-2">Understand and improve firm performance</div>
        <div className="text-sm text-slate-600 mb-3">Hiểu và cải thiện hiệu quả hoạt động của doanh nghiệp</div>
        <div className="flex flex-wrap justify-center gap-2">
          {[["Performance is RELATIVE","Tương đối"],["Comprehensive","Toàn diện"],["Integrative","Tích hợp"],["Dynamic","Động"],["Question-based","Dựa trên câu hỏi"]].map(([e,v])=>(
            <Tag key={e} color="green">{e} {v}</Tag>
          ))}
        </div>
      </div>
    </Card>
    <Card title="Strategy in This Course (Ch.1)" vn="Định nghĩa chiến lược trong khóa này" color="purple">
      <div className="flex items-center justify-center flex-wrap gap-1 text-xs font-semibold">
        <Tag color="purple">Create value for customers</Tag><span className="text-purple-400">+</span>
        <Tag color="purple">Beat competitors</Tag><span className="text-purple-400">+</span>
        <Tag color="purple">Get paid for it</Tag>
      </div>
      <div className="mt-3 flex items-center justify-center flex-wrap gap-1 text-xs">
        <Tag color="slate">Analysis</Tag><Arrow /><Tag color="slate">Decisions</Tag><Arrow /><Tag color="slate">Action / Execution</Tag><Arrow /><Tag color="slate">Leadership</Tag>
      </div>
      <p className="mt-3 text-xs text-center text-slate-500">No "magic bullets." Strategy is both big picture AND detailed plans for execution.</p>
      <p className="mt-1 text-xs text-center text-slate-400">Không có "viên đạn thần kỳ." Chiến lược bao gồm cả bức tranh lớn VÀ kế hoạch chi tiết để thực thi.</p>
    </Card>
    <Card title="6-Step Answer Formula" vn="Công thức trả lời 6 bước (suy luận từ yêu cầu giáo trình)" color="amber">
      <div className="space-y-2">
        {[["1","State the performance issue","Nêu vấn đề hiệu quả"],["2","Identify the dominant level","Xác định cấp độ chính"],["3","Name specific drivers","Chỉ rõ các driver cụ thể"],["4","Explain HOW → mechanism","Giải thích cơ chế tác động"],["5","Cross-level linkage","Liên kết xuyên cấp độ"],["6","Judge: positive/negative? Persist?","Đánh giá: tích cực/tiêu cực? Bền vững?"]].map(([n,en,vn])=>(
          <div key={n} className="flex items-start gap-2">
            <div className="bg-amber-500 text-white rounded-full w-6 h-6 flex items-center justify-center text-xs font-bold flex-shrink-0">{n}</div>
            <div><span className="font-semibold text-sm">{en}</span> <span className="text-xs text-slate-500">{vn}</span></div>
          </div>
        ))}
      </div>
    </Card>
    <Card title="Weak vs. Strong" vn="Câu trả lời yếu vs. mạnh" color="red">
      <table className="w-full text-xs"><thead><tr><th className="text-left pb-1 text-red-700">Weak ✗</th><th className="text-left pb-1 text-green-700">Strong ✓</th></tr></thead>
      <tbody className="divide-y">
        {[["Defines concepts only","Applies to specific case"],['"Competition was intense"',"WHY intense, HOW changed profitability"],['"Resources mattered"',"WHICH, why V-R-I, organized to exploit?"],["Static snapshot","Trend + future direction"],["One level only","Cross-level connection"],["Generic conclusion","Crisp judgment on performance"]].map(([w,s],i)=>(
          <tr key={i}><td className="py-1 pr-2 text-red-600">{w}</td><td className="py-1 text-green-700">{s}</td></tr>
        ))}
      </tbody></table>
    </Card>
  </div>);
}

function FiveLevels() {
  return (<div>
    <SectionTitle vn="Khuôn khổ Năm Cấp Độ">The Five-Level Framework</SectionTitle>
    <Card title="Three Critical Insights (Ch.2)" vn="Ba nhận thức quan trọng" color="blue">
      <div className="grid grid-cols-3 gap-2">
        {[["Systemic Hệ thống","Levels interdependent; changes cascade"],["Changing Liên tục thay đổi","Must project forward, not snapshot"],["Interdependent Phụ thuộc lẫn nhau","Favorable macro ≠ firm success if micro/firm unfavorable"]].map(([t,d])=>(
          <div key={t} className="bg-white border rounded p-3 text-center">
            <div className="font-bold text-blue-700 text-sm mb-1">{t}</div>
            <div className="text-xs text-slate-600">{d}</div>
          </div>
        ))}
      </div>
    </Card>
    <div className="bg-slate-800 text-white rounded-xl p-5 mb-4">
      <div className="text-center font-bold text-lg mb-4">Drivers of Firm Performance</div>
      <div className="text-center text-xs text-slate-300 mb-4">(Pentagon diagram — Performance Drivers PDF, slide 27)</div>
      <div className="space-y-3">
        <div className="bg-indigo-900 rounded-lg p-3">
          <div className="flex items-center gap-2 mb-2"><Tag color="purple">META Siêu quốc gia</Tag><span className="text-xs text-indigo-300">Beyond home-country control</span></div>
          <div className="flex flex-wrap gap-1">{["Geopolitics","Global Tech","Global Economics","Social/Env Issues","Multilateral Orgs","Trade Blocs","Foreign Gov'ts","Int'l Financial Flows","Foreign MNCs","Other Groups"].map(d=>(<span key={d} className="bg-indigo-800 text-indigo-200 text-xs px-2 py-0.5 rounded">{d}</span>))}</div>
        </div>
        <div className="bg-blue-900 rounded-lg p-3">
          <div className="flex items-center gap-2 mb-2"><Tag color="blue">MACRO Quốc gia</Tag><span className="text-xs text-blue-300">Economy-wide national environment</span></div>
          <div className="flex flex-wrap gap-1">{["Macroeconomics","Nat'l Resources & Capabilities","Gov't Policies","Institutions (Design/Support/Governance)","Civil Society"].map(d=>(<span key={d} className="bg-blue-800 text-blue-200 text-xs px-2 py-0.5 rounded">{d}</span>))}</div>
        </div>
        <div className="bg-teal-900 rounded-lg p-3">
          <div className="flex items-center gap-2 mb-2"><Tag color="cyan">MESO Cụm ngành</Tag><span className="text-xs text-teal-300">Related firms, suppliers, customers</span></div>
          <div className="flex flex-wrap gap-1">{["Demand & Customers","Inputs & Suppliers","Shared Resources","Shared Activities","Complementarities","Substitutes","Meso Policies","Meso Institutions"].map(d=>(<span key={d} className="bg-teal-800 text-teal-200 text-xs px-2 py-0.5 rounded">{d}</span>))}</div>
        </div>
        <div className="bg-amber-900 rounded-lg p-3">
          <div className="flex items-center gap-2 mb-2"><Tag color="amber">MICRO Ngành</Tag><span className="text-xs text-amber-300">Competitive environment</span></div>
          <div className="flex flex-wrap gap-1">{["Industry Characteristics","Competition","Cooperation","Strategic Groups","Lead Firms","Micro Policies","Micro Institutions"].map(d=>(<span key={d} className="bg-amber-800 text-amber-200 text-xs px-2 py-0.5 rounded">{d}</span>))}</div>
        </div>
        <div className="bg-green-900 rounded-lg p-3">
          <div className="flex items-center gap-2 mb-2"><Tag color="green">FIRM Doanh nghiệp</Tag><span className="text-xs text-green-300">Internal drivers</span></div>
          <div className="grid grid-cols-2 gap-2 text-xs">
            <div><div className="text-green-400 font-semibold mb-1">SPARK:</div><div className="flex flex-wrap gap-1">{["Scope","Positioning","Activities","Resources","Knowledge"].map(d=>(<span key={d} className="bg-green-800 text-green-200 px-2 py-0.5 rounded">{d}</span>))}</div></div>
            <div><div className="text-green-400 font-semibold mb-1">Also:</div><div className="flex flex-wrap gap-1">{["Execution","Org & Mgmt","Governance","Leadership","Firm Policies","Firm Institutions"].map(d=>(<span key={d} className="bg-green-800 text-green-200 px-2 py-0.5 rounded">{d}</span>))}</div></div>
          </div>
        </div>
      </div>
      <div className="mt-4 bg-slate-700 rounded p-3 text-center">
        <div className="text-yellow-300 font-bold text-sm">At EVERY level ask:</div>
        <div className="text-white text-sm mt-1">Does this driver make a <strong>positive or negative</strong> contribution to <strong>profitability</strong> or <strong>profitable growth</strong>?</div>
        <div className="text-slate-400 text-xs mt-1">Driver này đóng góp <strong>tích cực hay tiêu cực</strong> vào lợi nhuận hoặc tăng trưởng có lợi nhuận?</div>
      </div>
    </div>
    <Card title="Levels AND Trends (Ch.2)" vn="Mức độ VÀ Xu hướng" color="amber">
      <div className="text-center font-semibold">"Better might still not be good. Worse might still not be bad."</div>
      <div className="text-center text-xs text-slate-500 mt-1">Tốt hơn chưa chắc đã tốt. Xấu hơn chưa chắc đã xấu.</div>
    </Card>
    <Card title="Q1 Template" vn="Mẫu trả lời nhanh cho Q1" color="green">
      <div className="bg-white border rounded p-3 text-sm italic">"At the [level], the crucial driver was [X]. This mattered because [mechanism]. It influenced profitability by [price / cost / demand / bargaining / entry / rivalry]. The impact was [positive / negative], and the trend was [direction]."</div>
      <div className="mt-2 bg-red-50 border border-red-300 rounded p-2 text-xs">⚠️ Q1 requires 5 different cases, one per level. <strong>Fill from your Session 1–8 class notes.</strong></div>
    </Card>
  </div>);
}

function SparkPosition() {
  return (<div>
    <SectionTitle vn="Mô hình SPARK & Phân tích Định vị">SPARK Model & Positioning</SectionTitle>
    <div className="bg-gradient-to-br from-green-800 to-green-900 text-white rounded-xl p-5 mb-4">
      <div className="text-center font-bold text-xl mb-1">Strategy = SPARK</div>
      <div className="text-center text-green-300 text-xs mb-4">Ch.3 — Công cụ phân tích cấp doanh nghiệp</div>
      <div className="space-y-2">
        {[{l:"S",w:"cope",q:"WHERE? Ở đâu?",d:"Industries, segments, geography",c:"bg-green-700"},{l:"P",w:"ositioning",q:"HOW? Như thế nào?",d:"Price/performance + cost + vs. competitors",c:"bg-green-600"},{l:"A",w:"ctivities",q:"DO what? Làm gì?",d:"Tasks to serve customers",c:"bg-emerald-700"},{l:"R",w:"esources",q:"HAVE what? Có gì?",d:"Brands, patents, workforce, facilities, financial",c:"bg-emerald-600"},{l:"K",w:"nowledge",q:"KNOW what? Biết gì?",d:"Market, tech, competitor, process, organizational",c:"bg-teal-700"}].map(s=>(
          <div key={s.l} className={`${s.c} rounded-lg p-3 flex items-center gap-3`}>
            <div className="text-3xl font-black text-green-200 w-8">{s.l}</div>
            <div className="flex-1"><div className="flex items-baseline gap-2"><span className="font-bold">{s.l}<span className="font-normal">{s.w}</span></span><span className="text-green-300 text-xs">{s.q}</span></div><div className="text-xs text-green-200 mt-0.5">{s.d}</div></div>
          </div>
        ))}
      </div>
      <div className="mt-3 grid grid-cols-3 gap-2 text-center text-xs">
        <div className="bg-green-700 rounded p-2"><strong>S</strong> determines WHERE</div>
        <div className="bg-green-700 rounded p-2"><strong>P + A</strong> determine HOW</div>
        <div className="bg-green-700 rounded p-2"><strong>R + K</strong> determine WITH WHAT</div>
      </div>
    </div>
    <Card title="Positioning: The Full Picture (Ch.3, Figs 3.3–3.5)" vn="Định vị: Dễ bị hỏi sai nhất trong kỳ thi" color="red">
      <div className="bg-red-50 border border-red-200 rounded p-3 mb-3 text-center">
        <div className="font-bold text-red-700">You CANNOT judge positioning from:</div>
        <div className="flex justify-center gap-4 mt-2">
          <div className="bg-white border border-red-300 rounded px-3 py-1 text-sm">Price/Performance alone ✗</div>
          <div className="bg-white border border-red-300 rounded px-3 py-1 text-sm">Cost/Performance alone ✗</div>
        </div>
        <div className="mt-2 font-bold text-green-700">Only MARGIN (Price − Cost) reveals truth ✓</div>
        <div className="text-xs text-slate-500 mt-1">Chỉ có BIÊN LỢI NHUẬN (Giá − Chi phí) mới cho thấy sự thật</div>
      </div>
      <div className="grid grid-cols-3 gap-2 mb-3">
        {[{f:"Firm B",p:"Below avg",c:"Very low",pr:"Above avg ✓",st:"Cost Leader",cl:"border-blue-400 bg-blue-50"},{f:"Firm C",p:"High",c:"Slightly high",pr:"Above avg ✓",st:"Differentiator",cl:"border-purple-400 bg-purple-50"},{f:"Firm D",p:"High",c:"Low",pr:"Highest ✓✓",st:"Rare: IP/scale/platform",cl:"border-green-400 bg-green-50"}].map(f=>(
          <div key={f.f} className={`border-2 ${f.cl} rounded-lg p-3 text-center`}><div className="font-bold text-sm">{f.f}</div><div className="text-xs mt-1">Price: {f.p}</div><div className="text-xs">Cost: {f.c}</div><div className="text-xs font-bold mt-1">Profit: {f.pr}</div><div className="text-xs text-slate-500 mt-1">{f.st}</div></div>
        ))}
      </div>
    </Card>
    <Card title="A-R-K Advantage Logic" vn="Logic lợi thế từ Hoạt động-Tài nguyên-Kiến thức" color="purple">
      <div className="space-y-2">
        <div className="bg-red-50 border-l-2 border-red-400 p-2 text-xs"><strong>NOT enough:</strong> "We are better at marketing"</div>
        <div className="bg-green-50 border-l-2 border-green-400 p-2 text-xs"><strong>IS enough:</strong> "We are better at marketing <em>and therefore customers pay us a price premium</em>"</div>
      </div>
      <div className="mt-3 grid grid-cols-3 gap-2 text-center text-xs">
        <div className="bg-purple-100 rounded p-2"><strong>Individual</strong> A, R, or K</div>
        <div className="bg-purple-200 rounded p-2"><strong>Combinations</strong> of A+R+K</div>
        <div className="bg-purple-300 rounded p-2"><strong>Systems</strong> (hardest to imitate)</div>
      </div>
    </Card>
    <Card title="Time Dimension (Ch.3)" vn="Chiều thời gian của chiến lược" color="cyan">
      <div className="grid grid-cols-3 gap-2 text-xs">
        {[{t:"Commitment",d:"Large investment → long-term advantage",ex:"Chemicals, pharma, oil, mining"},{t:"Hustle",d:"Stream of temporary advantages, move fast",ex:"Motion pictures, fashion, trading, some tech"},{t:"Real Options",d:"Stay in game without big commitment",ex:"High uncertainty + irreversibility"}].map(s=>(
          <div key={s.t} className="bg-white border rounded p-3"><div className="font-bold text-cyan-700">{s.t}</div><div className="mt-1">{s.d}</div><div className="mt-1 text-slate-500 italic">{s.ex}</div></div>
        ))}
      </div>
    </Card>
    <Card title="General vs. Specific Competitive Advantages (Ch.3)" vn="Lợi thế cạnh tranh chung vs. cụ thể" color="amber">
      <div className="grid grid-cols-2 gap-3 text-xs">
        <div className="bg-amber-50 border rounded p-3"><div className="font-bold text-amber-700 mb-1">General Chung</div><div>Built up over time: R&D, brands, manufacturing excellence.</div></div>
        <div className="bg-amber-50 border rounded p-3"><div className="font-bold text-amber-700 mb-1">Specific Cụ thể</div><div>Why the company succeeds or fails TODAY against specific competitors.</div></div>
      </div>
      <div className="mt-2 text-xs text-center">Hustle = tạo lợi thế chung để liên tục sinh ra lợi thế cụ thể cần thiết ngay lập tức.</div>
    </Card>
    <Card title="Scope Combinations (Ch.3, Fig 3.1)" vn="Ma trận kết hợp Phạm vi" color="slate">
      <div className="grid grid-cols-2 gap-3">
        <div className="grid grid-cols-2 gap-1 text-xs">{["Local Diversifier","Global Diversifier","Local Specialist","Global Specialist"].map(s=>(<div key={s} className="bg-slate-100 border rounded p-2 text-center">{s}</div>))}</div>
        <div className="grid grid-cols-2 gap-1 text-xs">{["Local Broadline","Global Broadline","Local Focus","Global Focus"].map(s=>(<div key={s} className="bg-slate-100 border rounded p-2 text-center">{s}</div>))}</div>
      </div>
    </Card>
    <Card title="Activities & Resources Lists (Lecture Ch.3)" vn="Danh sách Hoạt động & Tài nguyên" color="green">
      <div className="grid grid-cols-2 gap-3 text-xs">
        <div><div className="font-semibold text-green-700 mb-1">Activities Hoạt động:</div><div className="flex flex-wrap gap-1">{["Product/Service Dev","Production","Logistics","Sales & Marketing","Customer Service","Accounting","Finance","HR Management","Strategy Setting"].map(a=>(<span key={a} className="bg-green-50 border border-green-200 rounded px-1.5 py-0.5">{a}</span>))}</div></div>
        <div><div className="font-semibold text-green-700 mb-1">Resources Tài nguyên:</div><div className="flex flex-wrap gap-1">{["Natural Resources","Financial Resources","Human Resources","Physical Assets","Locations","Patents","Brands","Reputation","Org Resources"].map(r=>(<span key={r} className="bg-green-50 border border-green-200 rounded px-1.5 py-0.5">{r}</span>))}</div></div>
      </div>
    </Card>
    <Card title="Signals of Value (Ch.3)" vn="Tín hiệu giá trị — ảnh hưởng WTP" color="rose">
      <div className="flex flex-wrap gap-1 text-xs">{["Brands","Installed base / existing customers","Celebrity endorsements","Awards (industry, trade)","Independent certification (ISO, etc.)","Price as signal of quality","Customer education"].map(s=>(<span key={s} className="bg-rose-50 border border-rose-200 rounded px-2 py-1">{s}</span>))}</div>
      <div className="mt-2 text-xs text-slate-500">Price can signal exclusivity. Raising price can sometimes increase sales (e.g., NZ wine, luxury goods).</div>
    </Card>
  </div>);
}

function IndustryTab() {
  return (<div>
    <SectionTitle vn="Phân tích cấp Ngành (Ch.4)">Industry-Level Analysis</SectionTitle>
    <Card title="Industry Definition — CRITICAL" vn="Định nghĩa ngành — CỰC KỲ QUAN TRỌNG" color="red">
      <div className="bg-white border-2 border-red-300 rounded-lg p-4 text-center mb-3">
        <div className="font-bold text-red-700 mb-2">Products/services with SIMILAR FORM AND FUNCTION in DIRECT COMPETITION</div>
        <div className="text-xs text-slate-600">Focus on "useful output" to customers. NOT statistical codes. Boundaries shift.</div>
      </div>
      <div className="grid grid-cols-2 gap-2 text-xs">
        <div className="bg-green-50 border border-green-300 rounded p-2">✓ iPhone + Android = same industry (smartphones)</div>
        <div className="bg-red-50 border border-red-300 rounded p-2">✗ Amazon + Microsoft + Meta ≠ same industry (different outputs)</div>
      </div>
    </Card>
    <Card title="Competition Spectrum" vn="Phổ các loại hình cạnh tranh" color="amber">
      <div className="flex items-stretch gap-0.5 mb-2">
        {[{t:"Subsidized",c:"bg-red-600",p:"Very Low"},{t:"Perfect",c:"bg-red-400",p:"Low"},{t:"Hyper",c:"bg-amber-400",p:"Low-Med"},{t:"Segmented",c:"bg-amber-500",p:"Varies"},{t:"Oligopoly",c:"bg-green-400",p:"Pot. High"},{t:"Monopoly",c:"bg-green-600",p:"High"}].map((s,i)=>(
          <div key={s.t} className={`${s.c} text-white text-center flex-1 py-3 ${i===0?'rounded-l-lg':''} ${i===5?'rounded-r-lg':''}`}><div className="font-bold text-xs">{s.t}</div><div className="text-xs opacity-80">{s.p}</div></div>
        ))}
      </div>
      <div className="flex justify-between text-xs text-slate-500 px-1"><span>← Cạnh tranh nhiều, lợi nhuận thấp</span><span>Cạnh tranh ít, lợi nhuận cao →</span></div>
      <div className="mt-2 bg-amber-50 border border-amber-300 rounded p-2 text-xs">⚠️ <strong>"Segmented competition"</strong> — handwritten addition by the professor. Do not omit.</div>
    </Card>
    <Card title="Conditions for Perfect Competition" vn="Điều kiện cạnh tranh hoàn hảo (sai lệch = giải thích lợi nhuận)" color="slate">
      <div className="grid grid-cols-2 gap-1 text-xs">
        {["No entry/exit barriers","Homogeneous products","No brands","No scale/scope/learning economies","No preferential relationships","No informational asymmetries","No transportation costs","No collusion"].map(c=>(<div key={c} className="flex items-center gap-1"><span className="text-red-500">✗</span> {c}</div>))}
      </div>
      <div className="mt-2 text-xs font-semibold text-center">Departures → explain why profits exist</div>
    </Card>
    <Card title="Industry-Level Driver Checklist" vn="Danh sách driver cấp Ngành" color="blue">
      <div className="grid grid-cols-2 gap-2 text-xs">
        {[["Industry Characteristics","Segments, tech, economics, geographic scope, size, growth"],["Competition","Ferocity, nature, identity, strategies, capabilities"],["Cooperation","Alliances, joint dev/marketing, lobbying"],["Strategic Groups","Similar strategies; within/between interaction"],["Lead Firms","Strength & behavior"],["Micro Policies","Industrial, trade, regulatory"],["Micro Institutions","Gov't bodies, regulators, associations"]].map(([t,d])=>(
          <div key={t} className="bg-white border rounded p-2"><div className="font-semibold text-blue-700">{t}</div><div className="text-slate-600 mt-0.5">{d}</div></div>
        ))}
      </div>
    </Card>
    <Card title="Barriers to Entry & Exit (Ch.4)" vn="Rào cản gia nhập & rút lui — giải thích tại sao chênh lệch lợi nhuận tồn tại" color="purple">
      <div className="grid grid-cols-2 gap-3 text-xs">
        <div><div className="font-semibold text-purple-700 mb-1">Entry Barriers:</div><ul className="space-y-0.5 list-disc list-inside"><li>Economies of scale, learning, scope</li><li>Brands and differentiation</li><li>Patents and government regulation</li><li>Access to inputs or distribution</li><li>Expected retaliation</li></ul></div>
        <div><div className="font-semibold text-purple-700 mb-1">Exit Barriers:</div><ul className="space-y-0.5 list-disc list-inside"><li>Specialized assets</li><li>Strategic barriers</li><li>Emotional barriers</li><li>Large costs of exiting</li></ul></div>
      </div>
      <div className="mt-2 bg-purple-50 border border-purple-300 rounded p-2 text-xs text-center font-semibold">"Barriers to entry and exit allow differences in profitability to persist" (Ch.4)</div>
    </Card>
    <Card title="Table 4.3: Features by Competition Type" vn="Bảng đặc điểm theo loại cạnh tranh" color="slate">
      <div className="overflow-x-auto"><table className="w-full text-xs"><thead><tr className="bg-slate-100"><th className="text-left p-1">Feature</th><th className="p-1">Subsidized</th><th className="p-1">Perfect</th><th className="p-1">Hyper</th><th className="p-1">Oligopoly</th><th className="p-1">Monopoly</th></tr></thead>
      <tbody className="divide-y">
        {[["Entry","Subsidized","Free","Feasible","Limited","No entry"],["Products","Inferior may succeed","Homogeneous","Distinguishable briefly","Distinguishable long","Unique"],["Brands","Subsidies overcome","None","Temporary","Sustained","Unique"],["Scale/Scope","Subsidies overcome","None","Limited","Pot. large","Very large"],["Customer rel.","Subsidies overcome","None","Temporary","Sustained","Exclusive"],["Info asymmetry","Subsidies overcome","None","Temporary","Sustained","Complete"],["Collusion","Not specified","None","Little","Possible","Total"],["Profit","Very low","Low","Low-mod","Pot. high","High sustained"]].map(([f,...vs])=>(
          <tr key={f}><td className="p-1 font-semibold">{f}</td>{vs.map((v,i)=><td key={i} className="p-1 text-center">{v}</td>)}</tr>
        ))}
      </tbody></table></div>
    </Card>
    <Card title="Competitor Envelope Analysis — CEA (Ch.4)" vn="Phân tích bao hình đối thủ" color="rose">
      <div className="text-xs mb-2">Assess competitors as they <strong>might be</strong>, not just as they are. "They do strategy too."</div>
      <div className="grid grid-cols-2 gap-1 text-xs">{["What if competitors optimized their activities?","What if they fully leveraged resources & knowledge?","What if they overcame strategic shortcomings?","What if taken over by savvy, deep-pocketed firms?","What would WE do if we managed the competitors?","Also: look for unmet demand / underserved segments"].map(q=>(<div key={q} className="bg-rose-50 border rounded p-1.5">{q}</div>))}</div>
    </Card>
    <Card title="Quality vs. Price Competition (Lecture Ch.4)" vn="Cạnh tranh chất lượng vs. giá" color="green">
      <div className="text-xs text-center font-semibold">"Competition based on quality, features, etc. generally leads to better industry profitability than competition solely on price."</div>
    </Card>
  </div>);
}

function MesoCluster() {
  return (<div>
    <SectionTitle vn="Cấp Cụm ngành / Trung mô (Ch.5)">Meso / Cluster Level</SectionTitle>
    <Card title='This level is "often missed in strategic analyses" (Ch.2)' vn='Cấp này "thường bị bỏ qua trong phân tích chiến lược"' color="amber">
      <div className="text-xs">A distinct source of performance involving suppliers, customers, related industries, spillovers, complementarities, substitutes, shared resources/activities.</div>
    </Card>
    <div className="grid grid-cols-2 gap-3 mb-4">
      <div className="bg-green-50 border-2 border-green-400 rounded-lg p-4">
        <div className="font-bold text-green-700 text-center mb-2">Complementarities Bổ sung</div>
        <div className="text-center text-2xl mb-2">📈</div>
        <div className="text-xs space-y-1"><div>→ <strong>EXPAND</strong> demand Mở rộng nhu cầu</div><div>→ Make focal product more valuable</div><div>→ Create shared efficiencies</div></div>
      </div>
      <div className="bg-red-50 border-2 border-red-400 rounded-lg p-4">
        <div className="font-bold text-red-700 text-center mb-2">Substitutes Thay thế</div>
        <div className="text-center text-2xl mb-2">📉</div>
        <div className="text-xs space-y-1"><div>→ <strong>CONTRACT</strong> demand Thu hẹp nhu cầu</div><div>→ Replace <strong>function</strong>, not just form</div><div>→ Compete for customer's <strong>time or money</strong></div></div>
      </div>
    </div>
    <Card title="Bargaining Power Framework (Buyers & Suppliers)" vn="Khuôn khổ sức mạnh thương lượng" color="blue">
      <div className="grid grid-cols-2 gap-3 text-xs">
        <div><div className="font-semibold text-blue-700 mb-1">Intrinsic Bargaining Strength:</div><ul className="space-y-0.5 list-disc list-inside"><li>Concentration</li><li>Volume of purchases</li><li>Availability of substitutes</li><li>Switching costs</li><li>Vertical integration threat</li><li>Pull-through to end-user</li></ul></div>
        <div><div className="font-semibold text-blue-700 mb-1">Price Sensitivity:</div><ul className="space-y-0.5 list-disc list-inside"><li>Cost / total purchases</li><li>Strategy and positioning</li><li>Buyer/supplier profitability</li><li>Impact on quality / performance</li></ul></div>
      </div>
    </Card>
    <Card title="Business Ecosystem Warning (Lecture Ch.5 Part 2)" vn="Cảnh báo hệ sinh thái kinh doanh" color="red">
      <div className="bg-red-100 border border-red-300 rounded p-3 text-center">
        <div className="font-bold text-red-800 text-sm">Where is value GENERATED, APPROPRIATED, and DEFENDED?</div>
        <div className="text-xs text-red-700 mt-1">Giá trị được TẠO RA, CHIẾM LĨNH, và BẢO VỆ ở đâu?</div>
      </div>
    </Card>
    <Card title={`"It's a Wonderful Life" Test (Lecture Ch.5 Part 1)`} vn="Nếu loại bỏ một người chơi, thế giới sẽ ra sao?" color="purple">
      <div className="text-xs">Imagine removing a player from the ecosystem. If the industry would be significantly worse off, that player has substantial power. If barely noticed, they do not.</div>
    </Card>
    <Card title='"When Will Buyers Get the Value?" (Lecture Ch.5 Part 1)' vn="Khi nào người mua sẽ chiếm lĩnh giá trị?" color="amber">
      <div className="text-xs space-y-1">
        <div>→ When we do NOT bring substantial value</div><div>→ When we do NOT bring something unique</div><div>→ When the pie WITH us ≈ WITHOUT us</div><div>→ When we need them more than they need us</div><div>→ When they can demand a price decrease and we can't resist</div><div>→ Buyer industry far from perfect competition → buyers have power</div><div>→ Buyer industry close to perfect competition → buyers have little power</div>
      </div>
      <div className="mt-2 text-xs text-slate-500 italic">Same logic applies in reverse for supplier power.</div>
    </Card>
    <Card title="Meso Driver Checklist" vn="Danh sách driver cấp Cụm ngành" color="cyan">
      <div className="grid grid-cols-2 gap-1 text-xs">{["Demand & Customers","Inputs & Suppliers","Shared Resources","Shared Activities","Complementarities","Substitutes","Meso Policies","Meso Institutions"].map(d=>(<div key={d} className="bg-white border rounded p-2 text-center">{d}</div>))}</div>
    </Card>
  </div>);
}

function MacroMeta() {
  return (<div>
    <SectionTitle vn="Cấp Quốc gia & Siêu quốc gia (Ch.6–Ch.7)">Macro & Meta Levels</SectionTitle>
    <Card title="MACRO / NATIONAL (Ch.6)" vn="Cấp Quốc gia" color="blue">
      <div className="grid grid-cols-2 gap-2 mb-3">
        {[{t:"Macroeconomics",d:"Demand, fiscal, inflation, rates, exchange, unemployment"},{t:"Gov't Policies",d:"Monetary, fiscal, tax, industrial, trade, education, S&T, competition, IP, regulatory"},{t:"Institutions",d:"Design (policy bureaus) · Support (education, research) · Governance (legal, regulatory, admin)"},{t:"Civil Society",d:"Social structures, attitudes, cultural attributes, stability"}].map(x=>(
          <div key={x.t} className="bg-blue-50 border rounded p-3"><div className="font-bold text-blue-700 text-sm">{x.t}</div><div className="text-xs text-slate-600 mt-1">{x.d}</div></div>
        ))}
      </div>
      <div className="bg-amber-50 border border-amber-300 rounded p-3 text-xs"><strong>Ch.6 Lecture Notes:</strong> Look at <Tag color="amber">Levels</Tag> <Tag color="amber">Trends</Tag> <Tag color="amber">Disruption</Tag> <Tag color="amber">Non-linear change</Tag></div>
    </Card>
    <Card title="META / SUPRANATIONAL (Ch.7)" vn="Cấp Siêu quốc gia" color="purple">
      <div className="grid grid-cols-3 gap-1 text-xs mb-3">{["Geopolitics","Global Technology","Global Economics","Social & Environmental","Multilateral Orgs (WTO, WB, IMF)","Trade Blocs (EU, USMCA, RCEP)","Foreign Governments","Int'l Financial Flows (FDI, portfolio)","Foreign MNCs","Other Groups (NGOs)"].map(d=>(<div key={d} className="bg-purple-50 border rounded p-2 text-center">{d}</div>))}</div>
    </Card>
    <Card title="Writing Standard for Macro & Meta" vn="Tiêu chuẩn viết bài" color="red">
      <div className="grid grid-cols-2 gap-3 text-xs">
        <div className="bg-red-50 border border-red-300 rounded p-3"><div className="font-bold text-red-700 mb-1">DO NOT write ✗</div><div>"The economy was bad"</div><div>"Geopolitics mattered"</div></div>
        <div className="bg-green-50 border border-green-300 rounded p-3"><div className="font-bold text-green-700 mb-1">DO write ✓</div><div>Show <strong>transmission mechanism</strong>: HOW it reaches demand, cost, inputs, finance, regulation, bargaining power</div></div>
      </div>
    </Card>
  </div>);
}

function VrioArk() {
  return (<div>
    <SectionTitle vn="Q2: VRIO mở rộng sang ARK trong SPARK">Q2: VRIO Extended to ARK in SPARK</SectionTitle>
    <Card title="VRIO Framework (extended in this course)" vn="Khuôn khổ VRIO (mở rộng trong khóa này)" color="purple">
      <div className="grid grid-cols-4 gap-2 mb-3">
        {[{l:"V",w:"aluable",d:"Improves WTP or lowers cost"},{l:"R",w:"are",d:"Few firms control it"},{l:"I",w:"nimitable",d:"Costly to obtain"},{l:"O",w:"rganized",d:"Firm captures value"}].map(v=>(
          <div key={v.l} className="bg-purple-50 border-2 border-purple-300 rounded-lg p-3 text-center"><div className="text-2xl font-black text-purple-700">{v.l}</div><div className="text-xs font-semibold">{v.l}{v.w}</div><div className="text-xs text-slate-600 mt-1">{v.d}</div></div>
        ))}
      </div>
      <div className="bg-purple-100 border border-purple-300 rounded p-2 text-center text-sm font-semibold">VRIO applies to <Tag color="purple">Resources</Tag> <strong>AND</strong> <Tag color="purple">Activities</Tag> <strong>AND</strong> <Tag color="purple">Knowledge</Tag> = <strong>ARK in SPARK</strong></div>
    </Card>
    <Card title="Q2A: Home Alone — Professor's Own Answer" vn="Câu trả lời của giáo sư (Lecture Notes Ch.5 Part 1, slide 20)" color="green">
      <div className="text-xs text-green-700 font-semibold mb-3 text-center">✅ VERIFIED: Lecture Notes Ch.5 Part 1, slide 20</div>
      <div className="space-y-3">
        {[{m:"Home Alone 1",pay:"$100K",sc:"THE PART",bg:"bg-blue-50 border-blue-300",logic:"Scarce commodity = the role. Actor unproven. Not yet V-R-I. Studio bears risk."},{m:"Home Alone 2",pay:"$13.7M",sc:"THE KID",bg:"bg-green-50 border-green-300",logic:"Scarce = Culkin himself. V (proven revenue), R (only one), I (emotional bond). Full VRIO → resource holder appropriates value."},{m:"Home Alone 3",pay:"$0",sc:"THE FRANCHISE",bg:"bg-amber-50 border-amber-300",logic:"Scarce = the franchise brand. Actor substitutable at high price. VRIO has a max price. Franchise > any single actor."}].map(h=>(
          <div key={h.m} className={`border-2 ${h.bg} rounded-lg p-4`}>
            <div className="flex items-center justify-between mb-2"><div className="font-bold text-lg">{h.m}</div><div className="font-bold text-lg">{h.pay}</div></div>
            <div className="bg-white rounded px-3 py-2 text-center mb-2"><span className="text-xs text-slate-500">Scarce commodity:</span><span className="font-black text-lg ml-2">{h.sc}</span></div>
            <div className="text-xs text-slate-700">{h.logic}</div>
          </div>
        ))}
      </div>
      <div className="mt-3 bg-blue-50 border border-blue-200 rounded p-2 text-xs"><strong>Jennifer Lawrence parallel (slide 21):</strong> Hunger Games $500K → HG2 $10M → HG3+4 &gt;$40M.</div>
      <div className="mt-2 text-xs font-semibold text-center">Key: What is "scarce" SHIFTS over time. VRIO is dynamic. Bargaining power follows scarcity.</div>
    </Card>
    <Card title="Q2B: Natalie Portman — Three-Picture Deal" vn="Hỏi về công cụ ảnh hưởng bên ngoài" color="blue">
      <div className="text-xs space-y-2">
        <div className="flex items-start gap-2"><Tag color="amber">Micro</Tag> <span>After franchise success, actor VRIO → compensation escalates (Culkin/Lawrence pattern)</span></div>
        <div className="flex items-start gap-2"><Tag color="cyan">Meso</Tag> <span>Bargaining escalation is structural in entertainment</span></div>
        <div className="flex items-start gap-2"><Tag color="green">Logic</Tag> <span>Lucas Films locked Portman in BEFORE she became VRIO = <strong>forward contract</strong> on potentially-VRIO resource</span></div>
      </div>
    </Card>
    <Card title="Q2C: Hollywood Flops — Limits of VRIO" vn="Giới hạn của VRIO" color="red">
      <div className="space-y-2 text-xs">
        {[["1","VRIO necessary but not sufficient","Great actor + bad script = flop. Activity system matters."],["2",'"O" is where flops happen',"Studios have VRIO but fail to Organize."],["3","Demand uncertainty = industry characteristic","Audience demand fundamentally unpredictable."],["4","Resources not automatically synergistic","Multiple VRIO ≠ guaranteed customer value."],["5","VRIO explains portfolios, not singles","Disney avg = more hits than misses. John Carter ≠ VRIO disproved."]].map(([n,t,d])=>(
          <div key={n} className="flex items-start gap-2"><div className="bg-red-500 text-white rounded-full w-5 h-5 flex items-center justify-center text-xs font-bold flex-shrink-0">{n}</div><div><strong>{t}.</strong> {d}</div></div>
        ))}
      </div>
    </Card>
  </div>);
}

function EtaSwatch() {
  return (<div>
    <SectionTitle vn="Q3: ETA / Tập đoàn Swatch">Q3: ETA / Swatch Group</SectionTitle>
    <Card title="Key Facts to Know Cold" vn="Dữ kiện phải thuộc lòng" color="blue">
      <div className="grid grid-cols-2 gap-2 text-xs">
        {[["New movement","5 years + CHF 10M"],["ETA position","Dominant in Swiss market"],["Forced to supply","By Swiss Competition Commission (1990s)"],["Swatch investment","Billions of CHF expanding ETA"],["Hayek quote","Like BMW supplying engines to Audi & Mercedes"],["Pricing","Not allowed to raise prices without permission"],["Phase-out","ébauches → 2008 → 2011; movements → 85% by 2012; 50% gradual"],["Rivals responded","Cloned (patents expired) or developed own"],["ETA share by 2019","33%"],["Critical fact","Movements MORE CONCENTRATED than watches"]].map(([k,v])=>(
          <div key={k} className="bg-blue-50 border rounded p-2"><div className="font-semibold text-blue-700">{k}</div><div className="text-slate-700">{v}</div></div>
        ))}
      </div>
    </Card>
    <Card title="ETA Timeline" vn="Dòng thời gian" color="slate">
      <div className="relative"><div className="absolute left-3 top-0 bottom-0 w-0.5 bg-slate-300"></div>
        <div className="space-y-3 ml-8">
          {[["1990s","Commission: ETA must supply any Swiss firm","red"],["2000","New movement: 5yr + CHF 10M","blue"],["2002–05","Swatch tries to phase out ébauche sales","amber"],["2008","Forced to keep supplying, no reduction","red"],["2011","Allowed to stop ébauches","amber"],["2012","Movements reduced to 85% of 2010","amber"],["2013","Gradual reduction to 50%","amber"],["2019","ETA share = 33%","green"],["Dec 2019","Commission: stop supplying","red"],["Jul 2020","Reversed: ETA free to sell or not","green"]].map(([yr,ev,c])=>(
            <div key={yr} className="flex items-start gap-2 relative">
              <div className={`absolute -left-8 w-4 h-4 rounded-full border-2 ${c==='red'?'bg-red-400 border-red-600':c==='green'?'bg-green-400 border-green-600':c==='amber'?'bg-amber-400 border-amber-600':'bg-blue-400 border-blue-600'}`}></div>
              <div><span className="font-bold text-xs">{yr}:</span><span className="text-xs ml-1">{ev}</span></div>
            </div>
          ))}
        </div>
      </div>
    </Card>
    <div className="grid grid-cols-2 gap-3 mb-4">
      <Card title="A. Why limit sales?" color="red"><div className="text-xs space-y-1"><div>→ Raise rivals' costs (5yr + CHF 10M)</div><div>→ Stop subsidizing competitors</div><div>→ Fewer competitors → higher Swatch brand profits</div><div>→ ETA: utility → proprietary advantage</div></div></Card>
      <Card title="B. Why continue selling?" color="green"><div className="text-xs space-y-1"><div>→ Amortize fixed costs; achieve scale</div><div>→ Maintain competitor dependency</div><div>→ Revenue may exceed competitive cost</div><div>→ Avoid further antitrust fines</div></div></Card>
      <Card title="C. Commission impact?" color="amber"><div className="text-xs space-y-1"><div>→ Lowered entry barriers → more competitors</div><div>→ Competition shifted: manufacturing → brand/design/marketing</div><div>→ Stimulated alternative development</div><div>→ Likely reduced avg profitability</div></div></Card>
      <Card title="D. Movement vs Watch economics?" color="purple"><div className="text-xs space-y-1"><div><strong>Movements:</strong> High fixed cost, massive scale → few firms → oligopoly</div><div><strong>Watches:</strong> Brand differentiation, many segments → many firms → segmented</div><div className="font-semibold mt-1">Movement → natural concentration. Watch → natural fragmentation.</div></div></Card>
    </div>
    <Card title="Movement vs Watch Economics" vn="So sánh kinh tế học máy và đồng hồ" color="slate">
      <table className="w-full text-xs"><thead><tr><th className="text-left pb-1"></th><th className="text-left pb-1 text-blue-700">Movements</th><th className="text-left pb-1 text-amber-700">Watches</th></tr></thead>
      <tbody className="divide-y">
        {[["Scale economies","Very high (5yr, CHF 10M; billions)","Lower (assembly/branding)"],["Entry barriers","Very high","Lower with movement access"],["Viable firms","Few → oligopoly","Many → segmented"],["Value capture","Manufacturing efficiency + scarcity","Brand + design + customer rel."]].map(([f,m,w])=>(
          <tr key={f}><td className="py-1 pr-2 font-semibold">{f}</td><td className="py-1 pr-2">{m}</td><td className="py-1">{w}</td></tr>
        ))}
      </tbody></table>
    </Card>
  </div>);
}

function CramSheet() {
  return (<div>
    <SectionTitle vn="Tóm tắt nhanh & Danh sách kiểm tra cuối cùng">Cram Sheet & Final Checklist</SectionTitle>
    <div className="bg-slate-900 text-white rounded-xl p-5 mb-4">
      <div className="text-center font-bold text-xl mb-4 text-yellow-300">17 THINGS TO KNOW COLD</div>
      <div className="space-y-2">
        {[
          ["1","Performance is RELATIVE","Hiệu quả là TƯƠNG ĐỐI","blue"],
          ["2","Comprehensive, integrative, dynamic, question-based","Toàn diện, tích hợp, động, dựa trên câu hỏi","blue"],
          ["3","Five levels. At each: positive or negative?","5 cấp. Mỗi cấp: tích cực hay tiêu cực?","blue"],
          ["4","Levels AND trends","Mức độ VÀ xu hướng","blue"],
          ["5","Industry = similar form + function + direct competition","Ngành = hình thức+chức năng tương tự+cạnh tranh trực tiếp","amber"],
          ["6","Full positioning = price AND cost","Định vị đầy đủ = giá VÀ chi phí","green"],
          ["7","SPARK: Scope, Positioning, Activities, Resources, Knowledge","","green"],
          ["8","VRIO extends to ARK in SPARK","VRIO mở rộng sang ARK trong SPARK","purple"],
          ["9","Complementors EXPAND; substitutes CONTRACT demand","Bổ sung mở rộng; thay thế thu hẹp nhu cầu","cyan"],
          ["10","Ecosystems: where is value generated, appropriated, defended?","Hệ sinh thái: giá trị được tạo/chiếm/bảo vệ ở đâu?","red"],
          ["11","Macro: levels, trends, disruption, non-linearity","Vĩ mô: mức, xu hướng, đứt gãy, phi tuyến","blue"],
          ["12","Q2 Home Alone: THE PART → THE KID → THE FRANCHISE","","green"],
          ["13","Q3 ETA: 5yr, CHF 10M, 33% by 2019, more concentrated","","amber"],
          ["14","Barriers to entry/exit allow profit differences to PERSIST","Rào cản làm chênh lệch lợi nhuận tồn tại","purple"],
          ["15","Competitor Envelope Analysis: what if competitors optimize?","Phân tích bao hình: nếu đối thủ tối ưu?","rose"],
          ["16","General vs. Specific advantages → explains hustle logic","Lợi thế chung vs. cụ thể","cyan"],
          ["17",`"Wonderful Life" test: remove a player, does it matter?`,"Loại bỏ người chơi, có ảnh hưởng không?","purple"],
        ].map(([n,en,vn,c])=>{
          const colors={blue:"bg-blue-800",green:"bg-green-800",amber:"bg-amber-800",purple:"bg-purple-800",red:"bg-red-800",cyan:"bg-cyan-800",rose:"bg-rose-800"};
          return (
            <div key={n} className={`${colors[c]} rounded-lg px-4 py-2 flex items-center gap-3`}>
              <div className="bg-white text-slate-900 rounded-full w-6 h-6 flex items-center justify-center text-xs font-bold flex-shrink-0">{n}</div>
              <div className="flex-1"><span className="font-semibold text-sm">{en}</span>{vn&&<span className="text-xs text-slate-300 ml-2">{vn}</span>}</div>
            </div>
          );
        })}
      </div>
    </div>
    <Card title="Mistakes That Cost Points" vn="Lỗi dễ mất điểm nhất" color="red">
      <div className="grid grid-cols-2 gap-2 text-xs">
        {["Industry by tech, not useful output","Performance as absolute, not relative","Static analysis, no trends","Levels listed without HOW/WHY mechanism","Meso confused with micro",'"Better resources" without WTP/cost effect',"Positioning from price alone or cost alone","Unsupported case detail not in files"].map(m=>(<div key={m} className="flex items-start gap-1"><span className="text-red-500">✗</span><span>{m}</span></div>))}
      </div>
    </Card>
    <Card title="Final 60-Minute Review Plan" vn="Kế hoạch ôn tập 60 phút cuối" color="green">
      <div className="space-y-3">
        {[{t:"0–15 min",a:"MEMORIZE",d:"17 items above. Five levels. SPARK. ARK. Price + cost."},{t:"15–30 min",a:"WRITE FROM MEMORY",d:"Five levels + drivers. Competition spectrum. Home Alone: part/kid/franchise. ETA facts."},{t:"30–45 min",a:"PRACTICE 3 MINI-ANSWERS",d:"One Five-Level. One VRIO/ARK. One ETA. Each 6–8 sentences."},{t:"45–60 min",a:"CHECK TWO THINGS",d:"Did I explain HOW? Did I explain WHY?"}].map(p=>(
          <div key={p.t} className="bg-green-50 border border-green-200 rounded-lg p-3"><div className="flex items-center gap-2 mb-1"><Tag color="green">{p.t}</Tag><span className="font-bold text-green-800 text-sm">{p.a}</span></div><div className="text-xs text-slate-700">{p.d}</div></div>
        ))}
      </div>
    </Card>
    <div className="bg-slate-100 rounded-lg p-4 text-center">
      <div className="font-bold text-slate-800 text-sm mb-1">The reflex to bring into the exam room:</div>
      <div className="text-slate-700 text-sm"><strong>Identify the level → Identify the driver → Explain the mechanism → Judge the performance effect</strong></div>
      <div className="text-xs text-slate-500 mt-1">Xác định cấp độ → Xác định driver → Giải thích cơ chế → Đánh giá tác động hiệu quả</div>
    </div>
    <div className="mt-4 text-xs text-slate-400 text-center">All framework content verified against Ch.1–Ch.7, lecture notes, practice exam. Home Alone from Lecture Notes Ch.5 Part 1 slide 20. No external sources.</div>
  </div>);
}

const tabContent = {"Overview":Overview,"Five Levels":FiveLevels,"SPARK & Position":SparkPosition,"Industry":IndustryTab,"Meso/Cluster":MesoCluster,"Macro & Meta":MacroMeta,"Q2: VRIO/ARK":VrioArk,"Q3: ETA/Swatch":EtaSwatch,"Cram Sheet":CramSheet};

export default function App() {
  const [tab, setTab] = useState("Overview");
  const Content = tabContent[tab];
  return (
    <div className="bg-white min-h-screen">
      <div className="bg-slate-900 text-white px-4 py-3">
        <div className="text-lg font-bold">STRT 6200 Midterm Study Guide</div>
        <div className="text-xs text-slate-400">English - Tiếng Việt | Closed Book</div>
      </div>
      <div className="overflow-x-auto border-b bg-slate-50">
        <div className="flex min-w-max">{tabs.map(t=>(
          <button key={t} onClick={()=>setTab(t)} className={`px-3 py-2 text-xs font-semibold whitespace-nowrap border-b-2 transition-colors ${tab===t?"border-blue-600 text-blue-700 bg-white":"border-transparent text-slate-500 hover:text-slate-700 hover:bg-slate-100"}`}>{t}</button>
        ))}</div>
      </div>
      <div className="p-4 max-w-3xl mx-auto"><Content /></div>
    </div>
  );
}

import Image from 'next/image';
import Link from 'next/link';

export default function Next1Page() {
  return (
    <main className="w-full pb-4">
      <div className="animate-in fade-in duration-700">
        
        {/* ROW 1: Agriculture Lead + CRPF News */}
        <div className="grid grid-cols-1 md:grid-cols-12 border-b-[3px] border-black">
          
          {/* Left/Center - Agriculture Lead (9 Cols) */}
          <article className="md:col-span-9 border-r-[3px] border-black p-3">
            <div className="bg-[#f58220] text-white text-center w-full mb-2 py-1 px-2 border-2 border-black">
              <span className="text-[15px] font-bold">महिला, युवा और प्रगतिशील किसानों की भागीदारी से प्रदेश को कृषि क्षेत्र में बनाया जाएगा आत्मनिर्भर और समृद्ध</span>
            </div>
            <h2 className="text-4xl md:text-[2.75rem] font-black leading-tight mb-4 text-center text-black">
              कृषि को लाभ का व्यवसाय बनाने के लिए आधुनिक तकनीक, निवेश और नवाचार को दिया जा रहा है बढ़ावा
            </h2>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div className="text-[13px] text-justify leading-snug font-medium text-gray-800 space-y-3">
                <p><strong>भोपाल।</strong> मुख्यमंत्री डॉ. मोहन यादव ने कहा है कि कृषि क्षेत्र को लाभ का व्यवसाय बनाने के लिए राज्य सरकार द्वारा निरंतर प्रयास किए जा रहे हैं।</p>
                <p>किसानों की आय में वृद्धि, कृषि उत्पादन एवं उत्पादकता बढ़ाने तथा खेती को उन्नत बनाने के उद्देश्य से आधुनिक तकनीक, नवाचार और कृषि यंत्रीकरण को प्रोत्साहित किया जा रहा है।</p>
              </div>
              
              <div className="w-full">
                <div className="w-full h-[180px] relative border-2 border-gray-400 mb-1">
                  <Image src="https://images.unsplash.com/photo-1592982537447-7440770cbfc9?q=80&w=800" alt="Agriculture" fill className="object-cover" />
                </div>
              </div>

              <div className="text-[13px] text-justify leading-snug font-medium text-gray-800 space-y-3">
                <p>प्रदेश में विशेष एग्रीकल्चर मॉडल विकसित कर एग्रो-बेस्ड इंडस्ट्रीज को बढ़ावा दिया जा रहा है।</p>
                <p>सरकार का लक्ष्य है कि छोटे और सीमांत किसानों को भी आधुनिक मशीनरी और सिंचाई सुविधाओं का लाभ मिल सके। जिससे वे आत्मनिर्भर बन सकें और प्रदेश की अर्थव्यवस्था में अपना योगदान दे सकें।</p>
              </div>
            </div>

            <div className="border-t-2 border-gray-400 mt-3 pt-2">
              <h3 className="text-lg font-black text-black">मुख्यमंत्री डॉ. यादव ने प्रधानमंत्री श्री मोदी का माना आभार</h3>
            </div>
          </article>

          {/* Right - CRPF News (3 Cols) */}
          <article className="md:col-span-3 p-3 bg-gray-50">
            <div className="bg-[#f2e7c3] text-center border-b border-black mb-2">
              <span className="text-xs font-bold text-[#8b0000]">पुलवामा में आतंकी हमला</span>
            </div>
            <h2 className="text-[22px] font-black leading-tight mb-3 text-black">
              सीआरपीएफ दल पर बाइक सवार आतंकियों ने की फायरिंग, हमले में तीन जवान घायल
            </h2>
            <div className="w-full h-[130px] relative border-2 border-gray-400 mb-3">
              <Image src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTYyJZIrsd982RIeSyHf8tZGHx30Zic-e2fc_FzAAhDNTwMQNEtwU-XepE&s=10" alt="Security" fill className="object-cover" />
            </div>
            <p className="text-[13px] text-justify leading-snug font-medium text-gray-800">
              <strong>श्रीनगर।</strong> कश्मीर घाटी के पुलवामा जिले में आतंकियों ने सीआरपीएफ के दल पर फायरिंग कर दी। हमले में तीन जवान घायल हो गए हैं। सुरक्षाबलों ने पूरे इलाके की घेराबंदी कर सर्च ऑपरेशन शुरू कर दिया है।
            </p>
          </article>

        </div>

        {/* ROW 2: Transport + Swachhata + Mother Dairy */}
        <div className="grid grid-cols-1 md:grid-cols-12 border-b-[3px] border-black">
          
          {/* Left (3 Cols) */}
          <article className="md:col-span-3 border-r-[3px] border-black p-3">
            <span className="text-[10px] font-bold">कैबिनेट ने दिए 77103 करोड़ रुपये के फैसले</span>
            <h2 className="text-xl font-black leading-tight mb-2 text-black mt-1">
              सस्ती खाद, शहरी परिवहन में सुधार और छोटे उद्योगों को कर्ज
            </h2>
            <p className="text-[13px] text-justify leading-snug font-medium text-gray-800 mb-2">
              <strong>नई दिल्ली।</strong> केंद्र सरकार ने देश में बुनियादी ढांचे के विकास, कृषि क्षेत्र को वित्तीय राहत और सूक्ष्म व छोटे कारोबारियों को बल देने के लिए बड़े फैसलों को मंजूरी दी है।
            </p>
            <div className="w-full h-[100px] relative border border-gray-400">
               <Image src="https://images.unsplash.com/photo-1587474260584-136574528ed5?q=80&w=800" alt="Industry" fill className="object-cover" />
            </div>
          </article>

          {/* Center (6 Cols) - Swachhata */}
          <article className="md:col-span-6 border-r-[3px] border-black p-3">
            <h3 className="text-lg font-black text-[#c60c46] italic mb-1">स्वच्छता सर्वेक्षण-2025, सुपर स्वच्छ लीग में नवी मुंबई नंबर वन, सूरत दूसरे नंबर पर रहा</h3>
            <h2 className="text-4xl font-black leading-tight mb-3 text-black">
              एमपी में ग्वालियर सबसे साफ
            </h2>
            <div className="flex gap-4">
              <div className="w-1/2 h-[150px] relative border-2 border-gray-400">
                <Image src="https://images.unsplash.com/photo-1570168007204-dfb528c6958f?q=80&w=800" alt="Award" fill className="object-cover" />
              </div>
              <div className="w-1/2 text-[13px] text-justify leading-snug font-medium text-gray-800">
                <p><strong>नई दिल्ली/ग्वालियर।</strong> केंद्रीय शहरी विकास मंत्रालय द्वारा जारी स्वच्छ सर्वेक्षण 2025 के नतीजों में मध्य प्रदेश के ग्वालियर ने बाजी मारी है। ग्वालियर को प्रदेश का सबसे साफ शहर घोषित किया गया है।</p>
              </div>
            </div>
          </article>

          {/* Right (3 Cols) */}
          <article className="md:col-span-3 p-3">
            <h2 className="text-xl font-black leading-tight mb-2 text-black">
              मदर डेयरी दूध 4 रुपये प्रति लीटर तक महंगा
            </h2>
            <p className="text-[13px] text-justify leading-snug font-medium text-gray-800">
              <strong>नई दिल्ली।</strong> मदर डेयरी ने दिल्ली-एनसीआर में दूध की कीमतों में 4 रुपये प्रति लीटर तक की बढ़ोतरी कर दी है। नई दरें कल से लागू होंगी। कंपनी ने लागत बढ़ने का हवाला दिया है।
            </p>
          </article>

        </div>

        {/* ROW 3: International + Train Derailment */}
        <div className="grid grid-cols-1 md:grid-cols-12 border-b-[3px] border-black bg-white">
          
          <article className="md:col-span-6 border-r-[3px] border-black p-3">
            <span className="text-[11px] font-bold bg-gray-200 px-1">अंजाम तक पहुंची कतर और ओमान की नई पहल</span>
            <h2 className="text-3xl font-black leading-tight mb-2 text-black mt-1">
              शुरुआती परमाणु समझौते के करीब आए अमेरिका-ईरान
            </h2>
            <div className="flex gap-3">
              <p className="w-1/2 text-[13px] text-justify leading-snug font-medium text-gray-800">
                <strong>नई दिल्ली/एजेंसी।</strong> लंबे समय से चले आ रहे तनाव के बीच, अमेरिका और ईरान एक नए शुरुआती परमाणु समझौते के करीब पहुँच गए हैं। मध्यस्थों के जरिए हुई बातचीत में दोनों पक्ष कुछ शर्तों पर सहमत हुए हैं।
              </p>
              <div className="w-1/2 h-[120px] relative border border-gray-400">
                <Image src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQmfiPiwf4K7s5snZMXzCpns-1mrIPHYxyzTHki03DvdLgvwu0Ex3bzeXaM&s=10" alt="Diplomats" fill className="object-cover" />
              </div>
            </div>
          </article>

          <article className="md:col-span-6 p-3">
            <span className="text-[12px] font-bold bg-black text-white px-2 py-0.5">असम में बड़ा ट्रेन हादसा...</span>
            <h2 className="text-3xl font-black leading-tight mb-2 text-black mt-1">
              कोलकाता-सैरंग एक्सप्रेस के कई डिब्बे पटरी से उतरे
            </h2>
            <p className="text-[13px] text-justify leading-snug font-medium text-gray-800">
              <strong>गुवाहाटी/एजेंसी।</strong> असम के लुमडिंग-बदरपुर हिल सेक्शन में गुरुवार सुबह एक बड़ा ट्रेन हादसा हो गया। कोलकाता से मिजोरम जा रही सैरंग एक्सप्रेस के कई डिब्बे पटरी से उतर गए। रेलवे अधिकारियों के अनुसार बचाव कार्य जारी है।
            </p>
          </article>

        </div>

        {/* ROW 4: Bottom Full Width (Pollution) */}
        <div className="p-3 bg-gray-50 border-b-[3px] border-black">
           <div className="flex items-center gap-2 mb-2">
             <span className="bg-[#c60c46] text-white px-2 py-0.5 text-sm font-bold">वायु प्रदूषण</span>
             <span className="text-[13px] font-bold text-gray-700">इस सूची में राजस्थान का श्रीगंगानगर 821 के चौंकाने वाले एक्यूआई के साथ सबसे ऊपर है, पंजाब का भटिंडा दूसरे नंबर पर</span>
           </div>
           <h2 className="text-3xl md:text-5xl font-black text-black leading-tight">
             चिंताजनक रिपोर्ट: दुनिया के 50 सबसे प्रदूषित शहरों में से 49 भारत के
           </h2>
        </div>

      </div>

      {/* ----------------- STATIC PAGINATION FOR SEPARATE ROUTES ----------------- */}
      <div className="flex justify-between items-center p-4 bg-white border-x-2 border-b-2 border-black max-w-[1200px] mx-auto mt-4">
        {/* Previous button goes to Main Home Route (Page 1) */}
        <Link href="/" className="px-4 py-1 border-2 border-[#008ba3] text-[#008ba3] font-bold text-sm hover:bg-[#008ba3] hover:text-white transition">
          ← पिछला पृष्ठ (Home)
        </Link>
        
        <span className="font-bold text-sm text-gray-700">पृष्ठ 2 / 3</span>

        {/* Next button goes to next2 route */}
        <Link href="/next2" className="px-4 py-1 border-2 border-[#008ba3] text-[#008ba3] font-bold text-sm hover:bg-[#008ba3] hover:text-white transition">
          अगला पृष्ठ →
        </Link>
      </div>
    </main>
  );
}
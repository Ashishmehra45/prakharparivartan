import Image from 'next/image';
import Link from 'next/link';

// 'force-dynamic' hata kar ye naya wala rule lagana hai
export const instant = false;

export default async function Home({ searchParams }: { searchParams: Promise<{ page?: string }> }) {
  const params = await searchParams;
  const currentPage = parseInt(params.page || '1', 10);
  const totalPages = 3;

  return (
    <main className="w-full pb-4">
      {/* ----------------- PAGE 1: FRONT PAGE ----------------- */}
      {currentPage === 1 && (
        <div className="animate-in fade-in duration-700">
          
          {/* ROW 1: Top 3 Columns */}
          <div className="grid grid-cols-1 md:grid-cols-12 border-b-[3px] border-black">
            
            <article className="md:col-span-3 border-r-[3px] border-black p-3">
              <h2 className="text-xl md:text-2xl font-black leading-tight mb-2 text-black">
                जमानत के बावजूद जेल में बंद कैदियों की रिहाई सुनिश्चित करें
              </h2>
              <div className="text-[13px] text-justify leading-snug font-medium text-gray-800 space-y-3">
                <p><strong>नई दिल्ली।</strong> सुप्रीम कोर्ट ने उस व्यवस्था को एक बार फिर दोहराया है, जिसमें कहा गया था कि जमानत मिलने के बाद भी यदि कोई आरोपी जेल में बंद है तो उसकी रिहाई सुनिश्चित की जानी चाहिए।</p>
                <p>अदालत ने कहा है कि यदि किसी कारण से कैदी की रिहाई में देरी होती है तो संबंधित कोर्ट को सूचित किया जाए। सुप्रीम कोर्ट ने कहा है कि जेल से रिहाई में एक दिन की भी देरी कैदियों के मूल अधिकारों का उल्लंघन है।</p>
              </div>
            </article>

            <article className="md:col-span-6 border-r-[3px] border-black p-3">
              <div className="bg-[#f2e7c3] text-center border-b border-black mb-2 py-1">
                <span className="text-sm font-bold text-[#8b0000]">उज्जैन में 1211.34 करोड़ रुपये की लागत के विभिन्न विकास कार्यों का किया भूमि-पूजन</span>
              </div>
              <h2 className="text-3xl md:text-4xl font-black leading-tight mb-3 text-center text-black">
                तीर्थ क्षेत्रों के विकास से उज्जैन 360 डिग्री बदला है : मुख्यमंत्री
              </h2>
              
              <div className="flex flex-col md:flex-row gap-3">
                <div className="w-full md:w-1/2 text-[13px] text-justify leading-snug font-medium text-gray-800">
                  <p className="mb-2"><strong>भोपाल।</strong> मुख्यमंत्री डॉ. मोहन यादव ने कहा है कि प्रधानमंत्री श्री नरेंद्र मोदी के नेतृत्व में देश भर के तीर्थ स्थलों का विकास हुआ है। उज्जैन में महाकाल महालोक के निर्माण के बाद से धार्मिक पर्यटन में भारी उछाल आया है।</p>
                  <p>उन्होंने कहा कि विकास कार्यों से उज्जैन का स्वरूप 360 डिग्री बदल गया है। करोड़ों रुपये के नए प्रोजेक्ट्स से स्थानीय लोगों को रोजगार मिलेगा और श्रद्धालुओं को बेहतर सुविधाएं प्राप्त होंगी।</p>
                </div>
                <div className="w-full md:w-1/2">
                  <div className="w-full h-[160px] relative border-2 border-gray-400 mb-1">
                    <Image 
                      src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT0EjHmAMImVXl4qSKvmJbr-kNslwIqCG5bZDJjCsAvNN9Co0mcN0nD4kg&s=10" 
                      alt="CM Event" 
                      fill 
                      className="object-cover" 
                    />
                  </div>
                  <p className="text-[10px] font-bold text-center bg-gray-200 p-1">विकास कार्यों का शिलान्यास करते हुए मुख्यमंत्री</p>
                </div>
              </div>
            </article>

            <article className="md:col-span-3 p-3">
              <h2 className="text-lg md:text-xl font-black leading-tight mb-2 text-black">
                बोहरा समाज शांति प्रिय, व्यापारिक गतिविधियों में अग्रणी और देशभक्त समाज है
              </h2>
              <div className="text-[13px] text-justify leading-snug font-medium text-gray-800 space-y-3">
                <p><strong>भोपाल।</strong> मुख्यमंत्री डॉ. मोहन यादव ने कहा कि बोहरा समाज ने हमेशा देश के विकास में अपना महत्वपूर्ण योगदान दिया है। व्यापार और उद्योग के क्षेत्र में समाज की उपलब्धियां सराहनीय हैं। समाज के धर्मगुरुओं ने भी हमेशा शांति और भाईचारे का संदेश दिया है।</p>
              </div>
            </article>
          </div>

          {/* ROW 2: Middle Big Article */}
          <div className="grid grid-cols-1 md:grid-cols-12 border-b-[3px] border-black">
            
            <article className="md:col-span-9 border-r-[3px] border-black p-3">
              <div className="bg-[#f58220] text-white text-center w-full mb-2 py-1">
                <span className="text-sm font-bold">पीएम ने गोवर्धन पूजा और गुजराती नववर्ष पर दी शुभकामनाएं-बोले-</span>
              </div>
              <h2 className="text-3xl md:text-5xl font-black leading-tight mb-4 text-black">
                श्रीकृष्ण भक्तों के भय का नाश करने वाले हैं
              </h2>
              
              <div className="flex flex-col md:flex-row gap-4">
                <div className="w-full md:w-[40%] h-[220px] relative border-2 border-gray-400">
                  <Image 
                    src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQG9S8SNtr2wPyvb7urTEAsAznaSCL4KSf89jKfC3IEDrY74liTCk6Vg9EC&s=10" 
                    alt="PM Event" 
                    fill 
                    className="object-cover object-top  " 
                  />
                </div>
                <div className="w-full md:w-[60%] text-[13px] text-justify leading-snug font-medium text-gray-800 columns-1 md:columns-2 gap-4">
                  <p className="mb-2"><strong>नई दिल्ली।</strong> प्रधानमंत्री नरेंद्र मोदी ने गोवर्धन पूजा के पावन अवसर पर देशवासियों को शुभकामनाएं दीं। उन्होंने कहा कि भगवान श्रीकृष्ण हमेशा अपने भक्तों के भय का नाश करते हैं और उन्हें सही मार्ग दिखाते हैं।</p>
                  <p className="mb-2">पीएम मोदी ने गुजराती नववर्ष पर भी लोगों को बधाई दी और उम्मीद जताई कि नया साल सभी के जीवन में सुख, शांति और समृद्धि लेकर आएगा। उन्होंने प्रकृति और पर्यावरण संरक्षण पर भी जोर दिया।</p>
                  <p>गोवर्धन पूजा हमें प्रकृति के महत्व को समझाती है और हमें पर्यावरण की रक्षा के लिए प्रेरित करती है।</p>
                </div>
              </div>
            </article>

            <article className="md:col-span-3 p-3 bg-gray-50">
              <h2 className="text-xl font-black leading-tight mb-2 text-black">
                आंध्र के डिप्टी सीएम पवन कल्याण का तीसरी बार तलाक
              </h2>
              <div className="w-full h-[140px] relative border-2 border-gray-400 mb-2">
                  <Image 
                    src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQhl3ZiaGtAEJCxqwGNj_ImketITM0phuWXhe-zqXOOHGASUP82bXMjbbsgshGNtUBlUIS3uf-DVMjrJOUCdG_mrkqae56zOofnRZmrHQ&s=10" 
                    alt="Portrait" 
                    fill 
                    className="object-cover" 
                  />
              </div>
              <p className="text-[13px] text-justify leading-snug font-medium text-gray-800">
                <strong>नई दिल्ली।</strong> आंध्र प्रदेश के उप मुख्यमंत्री और जनसेना पार्टी के प्रमुख पवन कल्याण की निजी जिंदगी एक बार फिर चर्चा में है। खबरों के मुताबिक, उनका तीसरी पत्नी एना लेजनेवा से तलाक हो गया है।
              </p>
            </article>
          </div>

          {/* ROW 3: Bottom Small Articles (3 Cols) */}
          <div className="grid grid-cols-1 md:grid-cols-3 divide-y md:divide-y-0 md:divide-x-[3px] divide-black border-b-[3px] border-black bg-white">
            
            <article className="p-3">
              <h3 className="text-[16px] font-black leading-tight mb-2 text-[#c60c46]">
                सैयद और हुसैन सरनेम वालों के नाम महाराष्ट्र में ज्यादा कटे
              </h3>
              <p className="text-[13px] text-justify leading-snug font-medium text-gray-800">
                <strong>मुंबई।</strong> महाराष्ट्र चुनाव से पहले मतदाता सूची से नाम कटने को लेकर विवाद तेज हो गया है। विपक्षी दलों का आरोप है कि एक विशेष समुदाय, खासकर सैयद और हुसैन सरनेम वालों के नाम बड़ी संख्या में सूची से हटा दिए गए हैं।
              </p>
            </article>

            <article className="p-3">
              <h3 className="text-[16px] font-black leading-tight mb-2 text-black">
                सोनिया गांधी ने कहा- यह कोई राजनीतिक किताब नहीं
              </h3>
              <div className="flex gap-3">
                <div className="w-20 h-24 relative flex-shrink-0 border border-gray-400">
                   <Image src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTVkAEp2_CWB4oSKZUwyQSIU7y1mGk9RGQ5GkKolKKWi7bKWsQEG9oVfprbYrLba71lD5_-ud3I7XhjkT63BHfCGgDpxMKqltFdkeJsT8c&s=10" alt="Book" fill className="object-cover" />
                </div>
                <p className="text-[13px] text-justify leading-snug font-medium text-gray-800">
                  <strong>नई दिल्ली।</strong> अपनी नई किताब के विमोचन पर सोनिया गांधी ने स्पष्ट किया कि यह पुस्तक उनके राजनीतिक जीवन पर नहीं बल्कि उनके निजी अनुभवों पर आधारित है।
                </p>
              </div>
            </article>

            <article className="p-3">
              <span className="text-[11px] font-bold bg-[#c60c46] text-white px-2 py-0.5 rounded-sm block w-max mb-1">70 हजार शिक्षकों का मामला</span>
              <h3 className="text-[16px] font-black leading-tight mb-2 text-black">
                वित्तीय स्थिति ठीक नहीं; राहत दी जाए
              </h3>
              <p className="text-[13px] text-justify leading-snug font-medium text-gray-800">
                <strong>जबलपुर।</strong> मध्य प्रदेश सरकार ने हाईकोर्ट से अपील की है कि राज्य की वित्तीय स्थिति को देखते हुए 70 हजार शिक्षकों को एरियर्स देने के आदेश में राहत दी जाए।
              </p>
            </article>

          </div>
        </div>
      )}

      {/* ----------------- PAGE 2 & 3 PLACEHOLDERS ----------------- */}
      {currentPage === 2 && (
        <div className="animate-in fade-in duration-700 min-h-[50vh] p-8">
          <h2 className="text-5xl font-black text-center border-b-4 border-[#008ba3] text-[#c60c46] pb-4">राज्य विशेष</h2>
        </div>
      )}
      {currentPage === 3 && (
        <div className="animate-in fade-in duration-700 min-h-[50vh] p-8">
           <h2 className="text-5xl font-black text-center border-b-4 border-[#008ba3] text-[#f58220] pb-4">खेल जगत</h2>
        </div>
      )}

      {/* ----------------- PAGINATION ----------------- */}
      <div className="flex justify-between items-center p-4 bg-white border-x-2 border-b-2 border-black max-w-[1200px] mx-auto mt-4">
        {currentPage > 1 ? (
          <Link href={`/?page=${currentPage - 1}`} className="px-4 py-1 border-2 border-[#008ba3] text-[#008ba3] font-bold text-sm hover:bg-[#008ba3] hover:text-white transition">← पिछला पृष्ठ</Link>
        ) : <div className="px-4 py-1 invisible">Placeholder</div>}
        
        <span className="font-bold text-sm text-gray-700">पृष्ठ {currentPage} / {totalPages}</span>

        {currentPage < totalPages ? (
          <Link href={`/?page=${currentPage + 1}`} className="px-4 py-1 border-2 border-[#008ba3] text-[#008ba3] font-bold text-sm hover:bg-[#008ba3] hover:text-white transition">अगला पृष्ठ →</Link>
        ) : <div className="px-4 py-1 invisible">Placeholder</div>}
      </div>
    </main>
  );
}
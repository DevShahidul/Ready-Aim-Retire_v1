let a="",l=[],c="",d="",h="",b=1;function C(e,t,n=7){const s=new Date(Date.now()+n*864e5).toUTCString();document.cookie=`${e}=${encodeURIComponent(t)}; expires=${s}; path=/admin; SameSite=Strict`}function T(e){const t=document.cookie.match(new RegExp("(^| )"+e+"=([^;]+)"));return t?decodeURIComponent(t[2]):null}function B(e){document.cookie=`${e}=; expires=Thu, 01 Jan 1970 00:00:00 GMT; path=/admin`}const k=document.getElementById("login-screen"),I=document.getElementById("admin-panel"),x=document.getElementById("login-form"),w=document.getElementById("login-error"),M=document.getElementById("logout-btn"),L=document.getElementById("posts-list"),m=document.getElementById("generation-modal"),g=document.getElementById("bulk-modal");async function j(){const e=T("admin_session");if(e)try{if((await fetch("/api/admin/posts",{headers:{"X-Admin-Password":e}})).ok){a=e,k.style.display="none",I.classList.add("show"),u();return}else B("admin_session")}catch{}}j();x.addEventListener("submit",async e=>{e.preventDefault();const t=document.getElementById("password").value;try{const n=await fetch("/api/admin/posts",{headers:{"X-Admin-Password":t}});if(n.ok)a=t,C("admin_session",t),k.style.display="none",I.classList.add("show"),u();else{const s=await n.json();v(s.error||"Invalid password")}}catch{v("Connection error. Please try again.")}});function v(e){w.textContent=e,w.classList.add("show")}M.addEventListener("click",()=>{a="",B("admin_session"),I.classList.remove("show"),k.style.display="flex",document.getElementById("password").value="",w.classList.remove("show")});async function u(){try{const e=await fetch("/api/admin/posts",{headers:{"X-Admin-Password":a}});if(!e.ok)throw new Error("Failed to load posts");const t=await e.json();l=t.posts,document.getElementById("stat-total").textContent=t.stats.total,document.getElementById("stat-with-images").textContent=t.stats.withImages,document.getElementById("stat-need-images").textContent=t.stats.needImages,G()}catch(e){L.innerHTML=`<div class="error-message show" style="margin: 1rem;">${e.message}</div>`}}function G(){L.innerHTML=l.map(e=>`
        <div class="post-card" data-slug="${e.slug}">
          <div class="post-thumbnail">
            ${e.hasImage?`<img src="${e.image}" alt="${e.title}">`:'<i class="fas fa-image"></i>'}
          </div>
          <div class="post-info">
            <h3>${e.title}</h3>
            <div class="post-meta">
              <span><i class="fas fa-folder"></i> ${e.category}</span>
              <span><i class="fas fa-calendar"></i> ${new Date(e.date).toLocaleDateString()}</span>
            </div>
            <span class="status-badge ${e.hasImage?"has-image":"needs-image"}">
              <i class="fas ${e.hasImage?"fa-check":"fa-exclamation-circle"}"></i>
              ${e.hasImage?"Has Image":"Needs Image"}
            </span>
          </div>
          <div class="post-actions">
            <button class="btn btn-primary btn-sm generate-btn" data-slug="${e.slug}">
              <i class="fas fa-magic"></i> ${e.hasImage?"Regenerate":"Generate"}
            </button>
            ${e.hasImage?`
              <a href="/blog/${e.slug}" target="_blank" class="btn btn-secondary btn-sm">
                <i class="fas fa-external-link-alt"></i> View
              </a>
            `:""}
          </div>
        </div>
      `).join(""),document.querySelectorAll(".generate-btn").forEach(e=>{e.addEventListener("click",()=>A(e.dataset.slug))})}function A(e){c=e,b=1;const t=l.find(n=>n.slug===e);document.getElementById("modal-title").textContent=`Generate Image: ${t?.title||e}`,i(1),m.classList.add("show"),P()}function p(){m.classList.remove("show"),c="",d="",h=""}document.getElementById("modal-close").addEventListener("click",p);m.addEventListener("click",e=>{e.target===m&&p()});function i(e){b=e,document.querySelectorAll(".step-dot").forEach(t=>{const n=parseInt(t.dataset.step);t.classList.remove("active","completed"),n===e&&t.classList.add("active"),n<e&&t.classList.add("completed")}),document.querySelectorAll(".step-content").forEach(t=>{t.classList.remove("active"),parseInt(t.dataset.step)===e&&t.classList.add("active")}),O()}function O(){const e=document.getElementById("modal-footer");switch(b){case 1:case 3:e.innerHTML=`
            <button class="btn btn-secondary" onclick="closeGenerationModal()">Cancel</button>
          `;break;case 2:e.innerHTML=`
            <button class="btn btn-secondary" onclick="closeGenerationModal()">Cancel</button>
            <button class="btn btn-primary" onclick="startImageGeneration()">
              <i class="fas fa-image"></i> Generate Image
            </button>
          `;break;case 4:e.innerHTML=`
            <button class="btn btn-secondary" onclick="startPromptGeneration()">
              <i class="fas fa-redo"></i> Try Again
            </button>
            <button class="btn btn-primary" onclick="saveImage()">
              <i class="fas fa-save"></i> Save Image
            </button>
          `;break;case 5:e.innerHTML=`
            <button class="btn btn-primary" onclick="closeGenerationModal()">Done</button>
          `;break}}async function P(){i(1);try{const e=await fetch("/api/admin/generate-prompt",{method:"POST",headers:{"Content-Type":"application/json","X-Admin-Password":a},body:JSON.stringify({slug:c})});if(!e.ok){const n=await e.json();throw new Error(n.error||"Failed to generate prompt")}const t=await e.json();d=t.prompt,document.getElementById("prompt-text").value=t.prompt,document.getElementById("prompt-reasoning").textContent=t.reasoning,i(2)}catch(e){alert("Error: "+e.message),p()}}async function N(){d=document.getElementById("prompt-text").value,i(3);try{const e=await fetch("/api/admin/generate-image",{method:"POST",headers:{"Content-Type":"application/json","X-Admin-Password":a},body:JSON.stringify({slug:c,prompt:d})});if(!e.ok){const n=await e.json();throw new Error(n.error||"Failed to generate image")}const t=await e.json();h=t.previewUrl,document.getElementById("preview-image").src=t.previewUrl,i(4)}catch(e){alert("Error: "+e.message),i(2)}}async function D(){i(3);try{const e=await fetch("/api/admin/save-image",{method:"POST",headers:{"Content-Type":"application/json","X-Admin-Password":a},body:JSON.stringify({slug:c,imageUrl:h})});if(!e.ok){const n=await e.json();throw new Error(n.error||"Failed to save image")}const t=await e.json();document.getElementById("success-path").textContent=`Saved to: ${t.imagePath}`,i(5),u()}catch(e){alert("Error: "+e.message),i(4)}}document.getElementById("bulk-generate-btn").addEventListener("click",H);document.getElementById("bulk-modal-close").addEventListener("click",y);document.getElementById("bulk-cancel").addEventListener("click",y);g.addEventListener("click",e=>{e.target===g&&y()});function H(){const t=l.filter(s=>!s.hasImage).length,n=(t*.02).toFixed(2);document.getElementById("bulk-cost-warning").textContent=`This will generate images for ${t} posts. Estimated cost: ~$${n} (GPT-4 prompts)`,document.getElementById("bulk-confirm").style.display="block",document.getElementById("bulk-progress").style.display="none",document.getElementById("bulk-complete").style.display="none",document.getElementById("bulk-modal-footer").style.display="flex",g.classList.add("show")}function y(){g.classList.remove("show")}document.getElementById("bulk-start").addEventListener("click",U);async function U(){const e=l.filter(o=>!o.hasImage);document.getElementById("bulk-confirm").style.display="none",document.getElementById("bulk-modal-footer").style.display="none";const t=document.getElementById("bulk-progress");t.style.display="block",t.innerHTML=e.map(o=>`
        <div class="bulk-progress-item" data-slug="${o.slug}">
          <i class="fas fa-circle pending"></i>
          <span>${o.title}</span>
        </div>
      `).join("");let n=0,s=0;for(const o of e){const f=t.querySelector(`[data-slug="${o.slug}"]`).querySelector("i");f.className="fas fa-spinner processing";try{const r=await fetch("/api/admin/generate-prompt",{method:"POST",headers:{"Content-Type":"application/json","X-Admin-Password":a},body:JSON.stringify({slug:o.slug})});if(!r.ok)throw new Error("Prompt generation failed");const S=await r.json(),E=await fetch("/api/admin/generate-image",{method:"POST",headers:{"Content-Type":"application/json","X-Admin-Password":a},body:JSON.stringify({slug:o.slug,prompt:S.prompt})});if(!E.ok)throw new Error("Image generation failed");const $=await E.json();if(!(await fetch("/api/admin/save-image",{method:"POST",headers:{"Content-Type":"application/json","X-Admin-Password":a},body:JSON.stringify({slug:o.slug,imageUrl:$.previewUrl})})).ok)throw new Error("Save failed");f.className="fas fa-check-circle success",n++}catch{f.className="fas fa-times-circle error",s++}await new Promise(r=>setTimeout(r,1e3))}document.getElementById("bulk-complete").style.display="block",document.getElementById("bulk-result").textContent=`Successfully generated ${n} images. ${s>0?`${s} failed.`:""}`,document.getElementById("bulk-modal-footer").style.display="flex",document.getElementById("bulk-modal-footer").innerHTML=`
        <button class="btn btn-primary" onclick="closeBulkModal(); loadPosts();">Done</button>
      `}window.closeGenerationModal=p;window.startImageGeneration=N;window.startPromptGeneration=P;window.saveImage=D;window.closeBulkModal=y;window.loadPosts=u;

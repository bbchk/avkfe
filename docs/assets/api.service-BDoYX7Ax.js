const o="http://localhost:8080",s=async()=>{const t=await fetch(`${o}/products`);if(!t.ok)throw new Error("Failed to get products");return await t.json()};export{s as f};

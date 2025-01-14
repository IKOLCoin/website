(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[405],{8581:function(e,t,r){(window.__NEXT_P=window.__NEXT_P||[]).push(["/",function(){return r(274)}])},274:function(e,t,r){"use strict";r.r(t),r.d(t,{default:function(){return S}});var i=r(5893),s=r(9008),n=r(7294),a=r(2212);class o{constructor(){this.enabled=!0,this.needsSwap=!0,this.clear=!1,this.renderToScreen=!1}setSize(){}render(){console.error("THREE.Pass: .render() must be implemented in derived pass.")}}const l=new a.iKG(-1,1,1,-1,0,1),c=new a.u9r;c.setAttribute("position",new a.a$l([-1,3,0,-1,-1,0,3,-1,0],3)),c.setAttribute("uv",new a.a$l([0,2,0,0,2,0],2));class h{constructor(e){this._mesh=new a.Kj0(c,e)}dispose(){this._mesh.geometry.dispose()}render(e){e.render(this._mesh,l)}get material(){return this._mesh.material}set material(e){this._mesh.material=e}}class d extends o{constructor(e,t,r,i,s){super(),this.scene=e,this.camera=t,this.overrideMaterial=r,this.clearColor=i,this.clearAlpha=void 0!==s?s:0,this.clear=!0,this.clearDepth=!1,this.needsSwap=!1,this._oldClearColor=new a.Ilk}render(e,t,r){const i=e.autoClear;let s,n;e.autoClear=!1,void 0!==this.overrideMaterial&&(n=this.scene.overrideMaterial,this.scene.overrideMaterial=this.overrideMaterial),this.clearColor&&(e.getClearColor(this._oldClearColor),s=e.getClearAlpha(),e.setClearColor(this.clearColor,this.clearAlpha)),this.clearDepth&&e.clearDepth(),e.setRenderTarget(this.renderToScreen?null:r),this.clear&&e.clear(e.autoClearColor,e.autoClearDepth,e.autoClearStencil),e.render(this.scene,this.camera),this.clearColor&&e.setClearColor(this._oldClearColor,s),void 0!==this.overrideMaterial&&(this.scene.overrideMaterial=n),e.autoClear=i}}var u={uniforms:{tDiffuse:{value:null},opacity:{value:1}},vertexShader:"\n\n\t\tvarying vec2 vUv;\n\n\t\tvoid main() {\n\n\t\t\tvUv = uv;\n\t\t\tgl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );\n\n\t\t}",fragmentShader:"\n\n\t\tuniform float opacity;\n\n\t\tuniform sampler2D tDiffuse;\n\n\t\tvarying vec2 vUv;\n\n\t\tvoid main() {\n\n\t\t\tvec4 texel = texture2D( tDiffuse, vUv );\n\t\t\tgl_FragColor = opacity * texel;\n\n\t\t}"};class m extends o{constructor(e,t){super(),this.textureID=void 0!==t?t:"tDiffuse",e instanceof a.jyz?(this.uniforms=e.uniforms,this.material=e):e&&(this.uniforms=a.rDY.clone(e.uniforms),this.material=new a.jyz({defines:Object.assign({},e.defines),uniforms:this.uniforms,vertexShader:e.vertexShader,fragmentShader:e.fragmentShader})),this.fsQuad=new h(this.material)}render(e,t,r){this.uniforms[this.textureID]&&(this.uniforms[this.textureID].value=r.texture),this.fsQuad.material=this.material,this.renderToScreen?(e.setRenderTarget(null),this.fsQuad.render(e)):(e.setRenderTarget(t),this.clear&&e.clear(e.autoClearColor,e.autoClearDepth,e.autoClearStencil),this.fsQuad.render(e))}}class f extends o{constructor(e,t){super(),this.scene=e,this.camera=t,this.clear=!0,this.needsSwap=!1,this.inverse=!1}render(e,t,r){const i=e.getContext(),s=e.state;let n,a;s.buffers.color.setMask(!1),s.buffers.depth.setMask(!1),s.buffers.color.setLocked(!0),s.buffers.depth.setLocked(!0),this.inverse?(n=0,a=1):(n=1,a=0),s.buffers.stencil.setTest(!0),s.buffers.stencil.setOp(i.REPLACE,i.REPLACE,i.REPLACE),s.buffers.stencil.setFunc(i.ALWAYS,n,4294967295),s.buffers.stencil.setClear(a),s.buffers.stencil.setLocked(!0),e.setRenderTarget(r),this.clear&&e.clear(),e.render(this.scene,this.camera),e.setRenderTarget(t),this.clear&&e.clear(),e.render(this.scene,this.camera),s.buffers.color.setLocked(!1),s.buffers.depth.setLocked(!1),s.buffers.stencil.setLocked(!1),s.buffers.stencil.setFunc(i.EQUAL,1,4294967295),s.buffers.stencil.setOp(i.KEEP,i.KEEP,i.KEEP),s.buffers.stencil.setLocked(!0)}}class v extends o{constructor(){super(),this.needsSwap=!1}render(e){e.state.buffers.stencil.setLocked(!1),e.state.buffers.stencil.setTest(!1)}}class g{constructor(e,t){if(this.renderer=e,void 0===t){const r={minFilter:a.wem,magFilter:a.wem,format:a.wk1},i=e.getSize(new a.FM8);this._pixelRatio=e.getPixelRatio(),this._width=i.width,this._height=i.height,(t=new a.dd2(this._width*this._pixelRatio,this._height*this._pixelRatio,r)).texture.name="EffectComposer.rt1"}else this._pixelRatio=1,this._width=t.width,this._height=t.height;this.renderTarget1=t,this.renderTarget2=t.clone(),this.renderTarget2.texture.name="EffectComposer.rt2",this.writeBuffer=this.renderTarget1,this.readBuffer=this.renderTarget2,this.renderToScreen=!0,this.passes=[],void 0===u&&console.error("THREE.EffectComposer relies on CopyShader"),void 0===m&&console.error("THREE.EffectComposer relies on ShaderPass"),this.copyPass=new m(u),this.clock=new a.SUY}swapBuffers(){const e=this.readBuffer;this.readBuffer=this.writeBuffer,this.writeBuffer=e}addPass(e){this.passes.push(e),e.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}insertPass(e,t){this.passes.splice(t,0,e),e.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}removePass(e){const t=this.passes.indexOf(e);-1!==t&&this.passes.splice(t,1)}isLastEnabledPass(e){for(let t=e+1;t<this.passes.length;t++)if(this.passes[t].enabled)return!1;return!0}render(e){void 0===e&&(e=this.clock.getDelta());const t=this.renderer.getRenderTarget();let r=!1;for(let i=0,s=this.passes.length;i<s;i++){const t=this.passes[i];if(!1!==t.enabled){if(t.renderToScreen=this.renderToScreen&&this.isLastEnabledPass(i),t.render(this.renderer,this.writeBuffer,this.readBuffer,e,r),t.needsSwap){if(r){const t=this.renderer.getContext(),r=this.renderer.state.buffers.stencil;r.setFunc(t.NOTEQUAL,1,4294967295),this.copyPass.render(this.renderer,this.writeBuffer,this.readBuffer,e),r.setFunc(t.EQUAL,1,4294967295)}this.swapBuffers()}void 0!==f&&(t instanceof f?r=!0:t instanceof v&&(r=!1))}}this.renderer.setRenderTarget(t)}reset(e){if(void 0===e){const t=this.renderer.getSize(new a.FM8);this._pixelRatio=this.renderer.getPixelRatio(),this._width=t.width,this._height=t.height,(e=this.renderTarget1.clone()).setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}this.renderTarget1.dispose(),this.renderTarget2.dispose(),this.renderTarget1=e,this.renderTarget2=e.clone(),this.writeBuffer=this.renderTarget1,this.readBuffer=this.renderTarget2}setSize(e,t){this._width=e,this._height=t;const r=this._width*this._pixelRatio,i=this._height*this._pixelRatio;this.renderTarget1.setSize(r,i),this.renderTarget2.setSize(r,i);for(let s=0;s<this.passes.length;s++)this.passes[s].setSize(r,i)}setPixelRatio(e){this._pixelRatio=e,this.setSize(this._width,this._height)}}new a.iKG(-1,1,1,-1,0,1);const p=new a.u9r;p.setAttribute("position",new a.a$l([-1,3,0,-1,-1,0,3,-1,0],3)),p.setAttribute("uv",new a.a$l([0,2,0,0,2,0],2));const x={uniforms:{tDiffuse:{value:null}},vertexShader:"\n\n\t\tvarying vec2 vUv;\n\n\t\tvoid main() {\n\n\t\t\tvUv = uv;\n\t\t\tgl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );\n\n\t\t}",fragmentShader:"\n\n\t\tuniform sampler2D tDiffuse;\n\n\t\tvarying vec2 vUv;\n\n\t\tvoid main() {\n\n\t\t\tvec4 tex = texture2D( tDiffuse, vUv );\n\n\t\t\tgl_FragColor = LinearTosRGB( tex );\n\n\t\t}"},b={uniforms:{tDiffuse:{value:null},amount:{value:.005},angle:{value:0}},vertexShader:"\n\n\t\tvarying vec2 vUv;\n\n\t\tvoid main() {\n\n\t\t\tvUv = uv;\n\t\t\tgl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );\n\n\t\t}",fragmentShader:"\n\n\t\tuniform sampler2D tDiffuse;\n\t\tuniform float amount;\n\t\tuniform float angle;\n\n\t\tvarying vec2 vUv;\n\n\t\tvoid main() {\n\n\t\t\tvec2 offset = amount * vec2( cos(angle), sin(angle));\n\t\t\tvec4 cr = texture2D(tDiffuse, vUv + offset);\n\t\t\tvec4 cga = texture2D(tDiffuse, vUv);\n\t\t\tvec4 cb = texture2D(tDiffuse, vUv - offset);\n\t\t\tgl_FragColor = vec4(cr.r, cga.g, cb.b, cga.a);\n\n\t\t}"},w={shaderID:"luminosityHighPass",uniforms:{tDiffuse:{value:null},luminosityThreshold:{value:1},smoothWidth:{value:1},defaultColor:{value:new a.Ilk(0)},defaultOpacity:{value:0}},vertexShader:"\n\n\t\tvarying vec2 vUv;\n\n\t\tvoid main() {\n\n\t\t\tvUv = uv;\n\n\t\t\tgl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );\n\n\t\t}",fragmentShader:"\n\n\t\tuniform sampler2D tDiffuse;\n\t\tuniform vec3 defaultColor;\n\t\tuniform float defaultOpacity;\n\t\tuniform float luminosityThreshold;\n\t\tuniform float smoothWidth;\n\n\t\tvarying vec2 vUv;\n\n\t\tvoid main() {\n\n\t\t\tvec4 texel = texture2D( tDiffuse, vUv );\n\n\t\t\tvec3 luma = vec3( 0.299, 0.587, 0.114 );\n\n\t\t\tfloat v = dot( texel.xyz, luma );\n\n\t\t\tvec4 outputColor = vec4( defaultColor.rgb, defaultOpacity );\n\n\t\t\tfloat alpha = smoothstep( luminosityThreshold, luminosityThreshold + smoothWidth, v );\n\n\t\t\tgl_FragColor = mix( outputColor, texel, alpha );\n\n\t\t}"};class j extends o{constructor(e,t,r,i){super(),this.strength=void 0!==t?t:1,this.radius=r,this.threshold=i,this.resolution=void 0!==e?new a.FM8(e.x,e.y):new a.FM8(256,256),this.clearColor=new a.Ilk(0,0,0);const s={minFilter:a.wem,magFilter:a.wem,format:a.wk1};this.renderTargetsHorizontal=[],this.renderTargetsVertical=[],this.nMips=5;let n=Math.round(this.resolution.x/2),o=Math.round(this.resolution.y/2);this.renderTargetBright=new a.dd2(n,o,s),this.renderTargetBright.texture.name="UnrealBloomPass.bright",this.renderTargetBright.texture.generateMipmaps=!1;for(let h=0;h<this.nMips;h++){const e=new a.dd2(n,o,s);e.texture.name="UnrealBloomPass.h"+h,e.texture.generateMipmaps=!1,this.renderTargetsHorizontal.push(e);const t=new a.dd2(n,o,s);t.texture.name="UnrealBloomPass.v"+h,t.texture.generateMipmaps=!1,this.renderTargetsVertical.push(t),n=Math.round(n/2),o=Math.round(o/2)}void 0===w&&console.error("THREE.UnrealBloomPass relies on LuminosityHighPassShader");const l=w;this.highPassUniforms=a.rDY.clone(l.uniforms),this.highPassUniforms.luminosityThreshold.value=i,this.highPassUniforms.smoothWidth.value=.01,this.materialHighPassFilter=new a.jyz({uniforms:this.highPassUniforms,vertexShader:l.vertexShader,fragmentShader:l.fragmentShader,defines:{}}),this.separableBlurMaterials=[];const c=[3,5,7,9,11];n=Math.round(this.resolution.x/2),o=Math.round(this.resolution.y/2);for(let h=0;h<this.nMips;h++)this.separableBlurMaterials.push(this.getSeperableBlurMaterial(c[h])),this.separableBlurMaterials[h].uniforms.texSize.value=new a.FM8(n,o),n=Math.round(n/2),o=Math.round(o/2);this.compositeMaterial=this.getCompositeMaterial(this.nMips),this.compositeMaterial.uniforms.blurTexture1.value=this.renderTargetsVertical[0].texture,this.compositeMaterial.uniforms.blurTexture2.value=this.renderTargetsVertical[1].texture,this.compositeMaterial.uniforms.blurTexture3.value=this.renderTargetsVertical[2].texture,this.compositeMaterial.uniforms.blurTexture4.value=this.renderTargetsVertical[3].texture,this.compositeMaterial.uniforms.blurTexture5.value=this.renderTargetsVertical[4].texture,this.compositeMaterial.uniforms.bloomStrength.value=t,this.compositeMaterial.uniforms.bloomRadius.value=.1,this.compositeMaterial.needsUpdate=!0;this.compositeMaterial.uniforms.bloomFactors.value=[1,.8,.6,.4,.2],this.bloomTintColors=[new a.Pa4(1,1,1),new a.Pa4(1,1,1),new a.Pa4(1,1,1),new a.Pa4(1,1,1),new a.Pa4(1,1,1)],this.compositeMaterial.uniforms.bloomTintColors.value=this.bloomTintColors,void 0===u&&console.error("THREE.UnrealBloomPass relies on CopyShader");const d=u;this.copyUniforms=a.rDY.clone(d.uniforms),this.copyUniforms.opacity.value=1,this.materialCopy=new a.jyz({uniforms:this.copyUniforms,vertexShader:d.vertexShader,fragmentShader:d.fragmentShader,blending:a.WMw,depthTest:!1,depthWrite:!1,transparent:!0}),this.enabled=!0,this.needsSwap=!1,this._oldClearColor=new a.Ilk,this.oldClearAlpha=1,this.basic=new a.vBJ,this.fsQuad=new h(null)}dispose(){for(let e=0;e<this.renderTargetsHorizontal.length;e++)this.renderTargetsHorizontal[e].dispose();for(let e=0;e<this.renderTargetsVertical.length;e++)this.renderTargetsVertical[e].dispose();this.renderTargetBright.dispose()}setSize(e,t){let r=Math.round(e/2),i=Math.round(t/2);this.renderTargetBright.setSize(r,i);for(let s=0;s<this.nMips;s++)this.renderTargetsHorizontal[s].setSize(r,i),this.renderTargetsVertical[s].setSize(r,i),this.separableBlurMaterials[s].uniforms.texSize.value=new a.FM8(r,i),r=Math.round(r/2),i=Math.round(i/2)}render(e,t,r,i,s){e.getClearColor(this._oldClearColor),this.oldClearAlpha=e.getClearAlpha();const n=e.autoClear;e.autoClear=!1,e.setClearColor(this.clearColor,0),s&&e.state.buffers.stencil.setTest(!1),this.renderToScreen&&(this.fsQuad.material=this.basic,this.basic.map=r.texture,e.setRenderTarget(null),e.clear(),this.fsQuad.render(e)),this.highPassUniforms.tDiffuse.value=r.texture,this.highPassUniforms.luminosityThreshold.value=this.threshold,this.fsQuad.material=this.materialHighPassFilter,e.setRenderTarget(this.renderTargetBright),e.clear(),this.fsQuad.render(e);let a=this.renderTargetBright;for(let o=0;o<this.nMips;o++)this.fsQuad.material=this.separableBlurMaterials[o],this.separableBlurMaterials[o].uniforms.colorTexture.value=a.texture,this.separableBlurMaterials[o].uniforms.direction.value=j.BlurDirectionX,e.setRenderTarget(this.renderTargetsHorizontal[o]),e.clear(),this.fsQuad.render(e),this.separableBlurMaterials[o].uniforms.colorTexture.value=this.renderTargetsHorizontal[o].texture,this.separableBlurMaterials[o].uniforms.direction.value=j.BlurDirectionY,e.setRenderTarget(this.renderTargetsVertical[o]),e.clear(),this.fsQuad.render(e),a=this.renderTargetsVertical[o];this.fsQuad.material=this.compositeMaterial,this.compositeMaterial.uniforms.bloomStrength.value=this.strength,this.compositeMaterial.uniforms.bloomRadius.value=this.radius,this.compositeMaterial.uniforms.bloomTintColors.value=this.bloomTintColors,e.setRenderTarget(this.renderTargetsHorizontal[0]),e.clear(),this.fsQuad.render(e),this.fsQuad.material=this.materialCopy,this.copyUniforms.tDiffuse.value=this.renderTargetsHorizontal[0].texture,s&&e.state.buffers.stencil.setTest(!0),this.renderToScreen?(e.setRenderTarget(null),this.fsQuad.render(e)):(e.setRenderTarget(r),this.fsQuad.render(e)),e.setClearColor(this._oldClearColor,this.oldClearAlpha),e.autoClear=n}getSeperableBlurMaterial(e){return new a.jyz({defines:{KERNEL_RADIUS:e,SIGMA:e},uniforms:{colorTexture:{value:null},texSize:{value:new a.FM8(.5,.5)},direction:{value:new a.FM8(.5,.5)}},vertexShader:"varying vec2 vUv;\n\t\t\t\tvoid main() {\n\t\t\t\t\tvUv = uv;\n\t\t\t\t\tgl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );\n\t\t\t\t}",fragmentShader:"#include <common>\n\t\t\t\tvarying vec2 vUv;\n\t\t\t\tuniform sampler2D colorTexture;\n\t\t\t\tuniform vec2 texSize;\n\t\t\t\tuniform vec2 direction;\n\n\t\t\t\tfloat gaussianPdf(in float x, in float sigma) {\n\t\t\t\t\treturn 0.39894 * exp( -0.5 * x * x/( sigma * sigma))/sigma;\n\t\t\t\t}\n\t\t\t\tvoid main() {\n\t\t\t\t\tvec2 invSize = 1.0 / texSize;\n\t\t\t\t\tfloat fSigma = float(SIGMA);\n\t\t\t\t\tfloat weightSum = gaussianPdf(0.0, fSigma);\n\t\t\t\t\tvec3 diffuseSum = texture2D( colorTexture, vUv).rgb * weightSum;\n\t\t\t\t\tfor( int i = 1; i < KERNEL_RADIUS; i ++ ) {\n\t\t\t\t\t\tfloat x = float(i);\n\t\t\t\t\t\tfloat w = gaussianPdf(x, fSigma);\n\t\t\t\t\t\tvec2 uvOffset = direction * invSize * x;\n\t\t\t\t\t\tvec3 sample1 = texture2D( colorTexture, vUv + uvOffset).rgb;\n\t\t\t\t\t\tvec3 sample2 = texture2D( colorTexture, vUv - uvOffset).rgb;\n\t\t\t\t\t\tdiffuseSum += (sample1 + sample2) * w;\n\t\t\t\t\t\tweightSum += 2.0 * w;\n\t\t\t\t\t}\n\t\t\t\t\tgl_FragColor = vec4(diffuseSum/weightSum, 1.0);\n\t\t\t\t}"})}getCompositeMaterial(e){return new a.jyz({defines:{NUM_MIPS:e},uniforms:{blurTexture1:{value:null},blurTexture2:{value:null},blurTexture3:{value:null},blurTexture4:{value:null},blurTexture5:{value:null},dirtTexture:{value:null},bloomStrength:{value:1},bloomFactors:{value:null},bloomTintColors:{value:null},bloomRadius:{value:0}},vertexShader:"varying vec2 vUv;\n\t\t\t\tvoid main() {\n\t\t\t\t\tvUv = uv;\n\t\t\t\t\tgl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );\n\t\t\t\t}",fragmentShader:"varying vec2 vUv;\n\t\t\t\tuniform sampler2D blurTexture1;\n\t\t\t\tuniform sampler2D blurTexture2;\n\t\t\t\tuniform sampler2D blurTexture3;\n\t\t\t\tuniform sampler2D blurTexture4;\n\t\t\t\tuniform sampler2D blurTexture5;\n\t\t\t\tuniform sampler2D dirtTexture;\n\t\t\t\tuniform float bloomStrength;\n\t\t\t\tuniform float bloomRadius;\n\t\t\t\tuniform float bloomFactors[NUM_MIPS];\n\t\t\t\tuniform vec3 bloomTintColors[NUM_MIPS];\n\n\t\t\t\tfloat lerpBloomFactor(const in float factor) {\n\t\t\t\t\tfloat mirrorFactor = 1.2 - factor;\n\t\t\t\t\treturn mix(factor, mirrorFactor, bloomRadius);\n\t\t\t\t}\n\n\t\t\t\tvoid main() {\n\t\t\t\t\tgl_FragColor = bloomStrength * ( lerpBloomFactor(bloomFactors[0]) * vec4(bloomTintColors[0], 1.0) * texture2D(blurTexture1, vUv) +\n\t\t\t\t\t\tlerpBloomFactor(bloomFactors[1]) * vec4(bloomTintColors[1], 1.0) * texture2D(blurTexture2, vUv) +\n\t\t\t\t\t\tlerpBloomFactor(bloomFactors[2]) * vec4(bloomTintColors[2], 1.0) * texture2D(blurTexture3, vUv) +\n\t\t\t\t\t\tlerpBloomFactor(bloomFactors[3]) * vec4(bloomTintColors[3], 1.0) * texture2D(blurTexture4, vUv) +\n\t\t\t\t\t\tlerpBloomFactor(bloomFactors[4]) * vec4(bloomTintColors[4], 1.0) * texture2D(blurTexture5, vUv) );\n\t\t\t\t}"})}}j.BlurDirectionX=new a.FM8(1,0),j.BlurDirectionY=new a.FM8(0,1);var T=r(1257),S=function(){var e=(0,n.useRef)(null);(0,n.useEffect)((function(){var e=document.querySelector("canvas.webgl"),t=new a.xsS,r=new a.ybr("#000000",1,2.5);t.fog=r;var i=new a.dpR,s=i.load("/grid-6.png"),n=i.load("/displacement-7.png"),o=i.load("/metalness-2.png"),l=.2,c=1,h=.4,u=new a._12(1,2,24,24),f=new a.Wid({map:s,displacementMap:n,displacementScale:l,metalness:c,metalnessMap:o,roughness:h}),v=new a.Kj0(u,f),p=new a.Kj0(u,f);v.rotation.x=.5*-Math.PI,p.rotation.x=.5*-Math.PI,v.position.y=0,v.position.z=.15,p.position.y=0,p.position.z=-1.85,t.add(v),t.add(p);var w=new a.Mig("#fec10c",0);t.add(w);var T=new a.PMe("#fec10c",10,25,.1*Math.PI,.25);T.position.set(.5,.75,2.1),T.target.position.x=-.25,T.target.position.y=.25,T.target.position.z=.25,t.add(T),t.add(T.target);var S=new a.PMe("#fec10c",10,25,.1*Math.PI,.25);S.position.set(-.5,.75,2.1),S.target.position.x=.25,S.target.position.y=.25,S.target.position.z=.25,t.add(S),t.add(S.target);var M={width:window.innerWidth,height:window.innerHeight},C=new a.cPb(23,M.width/M.height,.01,20);C.position.x=0,C.position.y=.06,C.position.z=1.1,t.add(C);var _=new a.CP7({canvas:e});_.setSize(M.width,M.height),_.setPixelRatio(Math.min(window.devicePixelRatio,2));var y=new g(_);y.setSize(M.width,M.height),y.setPixelRatio(Math.min(window.devicePixelRatio,2));var P=new d(t,C);y.addPass(P);var k=new m(b);k.uniforms.amount.value=0,y.addPass(k);var N=new m(x);y.addPass(N);var R=new j;R.strength=0,y.addPass(R),window.addEventListener("resize",(function(){M.width=window.innerWidth,M.height=window.innerHeight,C.aspect=M.width/M.height,C.updateProjectionMatrix(),_.setSize(M.width,M.height),_.setPixelRatio(Math.min(window.devicePixelRatio,2)),y.setSize(M.width,M.height),y.setPixelRatio(Math.min(window.devicePixelRatio,2))}));var D=new a.SUY,z=function(){var e=D.getElapsedTime();v.position.z=.15*e%2,p.position.z=.15*e%2-2,y.render(),window.requestAnimationFrame(z)};z()}),[]);var t=(0,n.useRef)([]);(0,n.useEffect)((function(){var e=new IntersectionObserver((function(e){e.forEach((function(e){e.isIntersecting?e.target.classList.add("visible"):e.target.classList.remove("visible")}))}),{threshold:.2});return t.current.forEach((function(t){return e.observe(t)})),function(){t.current.forEach((function(t){return e.unobserve(t)}))}}),[]);var r=[{quarter:"Q1 2025",description:["Token Launch and Launch of Influenz Marketplace."]},{quarter:"Q2 2025",description:["Building out more infrastructure."]},{quarter:"Q3 2025",description:["Beta Testing for Gamification System."]},{quarter:"Q4 2025",description:["Full Credentialing System Release."]},{quarter:"Q1 2026",description:["More info coming soon."]}],o=(0,n.useState)(0),l=o[0],c=o[1];return(0,i.jsxs)("div",{children:[(0,i.jsxs)(s.default,{children:[(0,i.jsx)("title",{children:"IKOL- Empowering Influencers in the Web3.0"}),(0,i.jsx)("meta",{name:"description",content:"Revolutionizing social media engagement and reputation management with blockchain technology."}),(0,i.jsx)("link",{rel:"icon",href:"./logo.svg"})]}),(0,i.jsxs)("main",{children:[(0,i.jsx)(T.default,{}),(0,i.jsxs)("section",{id:"hero",className:"HeroSection",children:[(0,i.jsxs)("div",{className:"titles",children:[(0,i.jsxs)("h1",{children:["Empowering Influencers in the ",(0,i.jsx)("span",{className:"yellow",children:"Web3.0"})]}),(0,i.jsx)("h2",{children:"Revolutionizing social media engagement and reputation management with blockchain technology."}),(0,i.jsxs)("div",{className:"buttons",children:[(0,i.jsx)("button",{children:"Learn More About IKOL \ud83e\udc65"}),(0,i.jsx)("button",{onClick:function(){return function(e){var t=document.querySelector(e);t&&t.scrollIntoView({behavior:"smooth",block:"start"})}("#tokenomics")},children:"Explore Tokenomics \ud83e\udc65"})]})]}),(0,i.jsx)("canvas",{ref:e,className:"webgl"})]}),(0,i.jsxs)("section",{id:"about",ref:function(e){return t.current[0]=e},className:"AboutSection section",children:[(0,i.jsxs)("div",{className:"textSide",children:[(0,i.jsxs)("h1",{children:["What is ",(0,i.jsx)("span",{className:"yellow",children:"IKOL?"})]}),(0,i.jsx)("p",{children:"IKOL stands for 'I am a Key Opinion Leader'. It's a Web3.0 ecosystem designed to empower influencers by creating opportunities for engagement, reputation management, and monetization."})]}),(0,i.jsxs)("div",{className:"imageSide",children:[(0,i.jsxs)("div",{className:"fourBox",children:[(0,i.jsxs)("div",{children:[(0,i.jsx)("img",{src:"./Coin.png"}),(0,i.jsx)("p",{children:"Exchange"})]}),(0,i.jsxs)("div",{children:[(0,i.jsx)("img",{src:"./Shield.png"}),(0,i.jsx)("p",{children:"Services"})]}),(0,i.jsxs)("div",{children:[(0,i.jsx)("img",{src:"./Euro.png"}),(0,i.jsx)("p",{children:"Educational"})]}),(0,i.jsxs)("div",{children:[(0,i.jsx)("img",{src:"./Safe.png"}),(0,i.jsx)("p",{children:"Staking"})]})]}),(0,i.jsx)("img",{className:"logo",src:"./logo.svg"})]})]}),(0,i.jsxs)("section",{id:"tokenomics",ref:function(e){return t.current[1]=e},className:"tokenomicSection section",children:[(0,i.jsxs)("h1",{children:[" ",(0,i.jsx)("span",{className:"yellow",children:"IKOL Token:"})," The Backbone of the Ecosystem"]}),(0,i.jsxs)("div",{className:"tokenomicColumns",children:[(0,i.jsx)("div",{className:"imageSide",children:(0,i.jsx)("img",{src:"./chart.svg"})}),(0,i.jsx)("div",{className:"textSide",children:(0,i.jsxs)("div",{className:"allocations",children:[(0,i.jsx)("p",{className:"blond",children:"Token allocations:"}),(0,i.jsxs)("p",{children:[" ",(0,i.jsx)("span",{className:"t100",children:"O"})," Community Sale: 30%"]}),(0,i.jsxs)("p",{children:[" ",(0,i.jsx)("span",{className:"t75",children:"O"})," Liquidity Pools: 30%"]}),(0,i.jsxs)("p",{children:[" ",(0,i.jsx)("span",{className:"t50",children:"O"})," Market-Making: 30%"]}),(0,i.jsxs)("p",{children:[" ",(0,i.jsx)("span",{className:"t25",children:"O"})," Incentives / Airdrops: 10%"]}),(0,i.jsx)("p",{className:"gray",children:"IKOL tokens ensure interoperability across the community and incentivize ecosystem participants."})]})})]})]}),(0,i.jsxs)("section",{id:"partners",ref:function(e){return t.current[2]=e},className:"tokenomicSection section",children:[(0,i.jsx)("h1",{children:"Meet Our Partners"}),(0,i.jsxs)("div",{className:"partnerColumns",children:[(0,i.jsxs)("div",{className:"imageSide",children:[(0,i.jsx)("a",{href:"https://influe.nz/",children:(0,i.jsx)("img",{src:"./influ.png"})}),(0,i.jsx)("p",{className:"t400",children:"Influenz: A Marketplace for Influencers."}),(0,i.jsx)("p",{children:"Influenz connects influencers and brands, facilitating transparent and impactful collaborations."})]}),(0,i.jsx)("div",{className:"textSide",children:(0,i.jsx)("p",{className:"titalic",children:"More partners coming soon!"})})]})]}),(0,i.jsxs)("section",{ref:function(e){return t.current[3]=e},className:"appSection section",children:[(0,i.jsxs)("h1",{children:["Applications in the ",(0,i.jsx)("span",{className:"yellow",children:"IKOL Ecosystem"})," "]}),(0,i.jsxs)("div",{className:"appColumns",children:[(0,i.jsxs)("div",{children:[(0,i.jsx)("img",{src:"./people.svg"}),(0,i.jsxs)("p",{className:"blond",children:["Influencer-Brand Marketplace ",(0,i.jsx)("br",{}),(0,i.jsx)("br",{}),(0,i.jsx)("span",{className:"lower",children:"Streamline collaborations between brands and influencers."})]})]}),(0,i.jsxs)("div",{children:[(0,i.jsx)("img",{src:"./like.svg"}),(0,i.jsxs)("p",{className:"blond",children:["Gamified Engagement ",(0,i.jsx)("br",{}),(0,i.jsx)("br",{}),(0,i.jsx)("span",{className:"lower",children:"Reward followers and enhance community interactions."})]})]}),(0,i.jsxs)("div",{children:[(0,i.jsx)("img",{src:"./metric.svg"}),(0,i.jsxs)("p",{className:"blond",children:["Influencer Rating System ",(0,i.jsx)("br",{}),(0,i.jsx)("br",{}),(0,i.jsx)("span",{className:"lower",children:"Build trust with KPIs based on provable metrics."})]})]})]})]}),(0,i.jsxs)("section",{id:"roadmap",ref:function(e){return t.current[4]=e},className:"roadmap section",children:[(0,i.jsx)("h1",{children:"Our Journey Ahead"}),(0,i.jsx)("div",{className:"timeline",children:r.map((function(e,t){return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)("div",{className:"timeline-item ".concat(t<=l?"active":""),onClick:function(){return c(t)},children:(0,i.jsx)("span",{children:e.quarter})},"timeline-item-".concat(t)),(0,i.jsx)("div",{className:"timeline-progress",style:{width:"".concat(l/(r.length-1)*100,"%")}})]})}))}),(0,i.jsxs)("div",{className:"description",children:[(0,i.jsx)("h3",{children:r[l].quarter}),(0,i.jsx)("ul",{children:r[l].description.map((function(e,t){return(0,i.jsx)("li",{children:e},t)}))})]})]}),(0,i.jsxs)("section",{id:"contact",ref:function(e){return t.current[5]=e},className:"callSection section",children:[(0,i.jsx)("img",{src:"./logo.svg"}),(0,i.jsx)("h1",{children:"Be Part of the Future"}),(0,i.jsx)("p",{children:"Join the IKOL community today and redefine influence in the digital era."}),(0,i.jsxs)("div",{children:[(0,i.jsx)("button",{children:"Join Our Community"}),(0,i.jsx)("button",{children:"Subscribe for Updates"})]})]}),(0,i.jsxs)("section",{className:"footter",children:[(0,i.jsxs)("div",{children:[(0,i.jsx)("a",{href:"https://www.instagram.com/ikoltoken",children:(0,i.jsx)("img",{src:"./Instagram.svg"})}),(0,i.jsx)("a",{href:"https://t.me/+7eByzLltvq1lMTkx",children:(0,i.jsx)("img",{src:"./Telegram.svg"})}),(0,i.jsx)("a",{href:"https://x.com/ikoltoken",children:(0,i.jsx)("img",{src:"./Twitter.svg"})}),(0,i.jsx)("a",{children:(0,i.jsx)("img",{src:"./Discord.svg"})}),(0,i.jsx)("a",{href:"https://www.youtube.com/@IKOLToken",children:(0,i.jsx)("img",{src:"./Youtube.svg"})})]}),(0,i.jsxs)("div",{children:[(0,i.jsx)("a",{children:"Privacy Policy"}),(0,i.jsx)("a",{children:"Terms of Use"})]})]})]})]})}},1257:function(e,t,r){"use strict";r.r(t);var i=r(5893),s=r(7294),n=r(6906),a=r.n(n),o=r(1163);t.default=function(){var e=(0,s.useState)(!1),t=e[0],r=e[1],n=(0,o.useRouter)(),l=function(e){var t=document.querySelector(e);t&&t.scrollIntoView({behavior:"smooth",block:"start"})};return(0,i.jsx)("nav",{className:a().navbar,children:(0,i.jsxs)("div",{className:a().navbarpad,children:[(0,i.jsx)("div",{className:a().logo,children:(0,i.jsx)("img",{src:"./logo.svg"})}),(0,i.jsxs)("div",{className:a().links,children:[(0,i.jsx)("a",{onClick:function(){return l("#about")},children:"About"}),(0,i.jsx)("a",{onClick:function(){return l("#tokenomics")},children:"Tokenomics"}),(0,i.jsx)("a",{onClick:function(){return l("#partners")},children:"Partners"}),(0,i.jsx)("a",{onClick:function(){return l("#roadmap")},children:"Roadmap"}),(0,i.jsx)("a",{onClick:function(){return l("#contact")},children:"Contact"})]}),(0,i.jsx)("a",{onClick:function(){return n.push("/IKOL_Lightpaper_v1.0.pdf")},className:a().externalLink,children:"Lightpaper"}),(0,i.jsxs)("div",{className:a().menuToggle,onClick:function(){r(!t)},children:[(0,i.jsx)("div",{}),(0,i.jsx)("div",{}),(0,i.jsx)("div",{})]}),(0,i.jsxs)("div",{className:"".concat(a().mobileMenu," ").concat(t?a().active:""),children:[(0,i.jsx)("a",{onClick:function(){return l("#about")},children:"About"}),(0,i.jsx)("a",{onClick:function(){return l("#tokenomics")},children:"Tokenomics"}),(0,i.jsx)("a",{onClick:function(){return l("#partners")},children:"Partners"}),(0,i.jsx)("a",{onClick:function(){return l("#roadmap")},children:"Roadmap"}),(0,i.jsx)("a",{onClick:function(){return l("#contact")},children:"Contact"}),(0,i.jsx)("a",{onClick:function(){return l("#tokenomics")},className:a().externalLinkM,children:"External"})]})]})})}},6906:function(e){e.exports={navbar:"Navbar_navbar__5lH7_",navbarpad:"Navbar_navbarpad___wn45",logo:"Navbar_logo__ocoVJ",links:"Navbar_links__ibzDp",externalLink:"Navbar_externalLink__D4sIW",menuToggle:"Navbar_menuToggle__M1Rgy",mobileMenu:"Navbar_mobileMenu__HJL4Q",active:"Navbar_active__KGCMZ"}},9008:function(e,t,r){e.exports=r(5443)},1163:function(e,t,r){e.exports=r(387)}},function(e){e.O(0,[737,774,888,179],(function(){return t=8581,e(e.s=t);var t}));var t=e.O();_N_E=t}]);
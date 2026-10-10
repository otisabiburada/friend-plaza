export const PLAZA_CSS = `
.fp-root{position:relative;margin-top:40px;height:calc(100% - 40px);overflow:hidden;overflow:clip;background:#0b1017;color:#c6d4df;font-size:14px;font-family:"Motiva Sans","Nunito Sans","Noto Sans",sans-serif}
.fp-canvas{position:absolute;left:0;top:0}
.fp-world{position:absolute;left:0;top:0;width:100%;height:100%;transform-origin:0 0;pointer-events:none}
.fp-world > *{pointer-events:auto}
.fp-card-z.plain{pointer-events:none}
.fp-walk{position:absolute;left:0;top:0;right:0;bottom:0;z-index:350;background:transparent}
.fp-store{position:absolute;margin:0;width:124px;height:40px;border-radius:3px;background:linear-gradient(#2d4a62,#1b2838);color:#fff;display:flex;align-items:center;justify-content:center;gap:8px;font-weight:800;font-size:14px;box-shadow:0 6px 16px rgba(0,0,0,.5),0 0 0 1px rgba(102,192,244,.5);z-index:3;box-sizing:border-box}
.fp-store.fp-focus{background:#fff;color:#0e141b;box-shadow:0 0 0 3px #fff,0 0 26px rgba(102,192,244,.8)}
.fp-store.plain{pointer-events:none}
.fp-prompt{position:absolute;padding:6px 12px;border-radius:3px;background:#66c0f4;color:#06121c;font-weight:800;font-size:13px;white-space:nowrap;z-index:6;pointer-events:none}
.fp-notice{position:absolute;left:50%;top:128px;transform:translateX(-50%);max-width:620px;padding:12px 18px;border-radius:3px;background:rgba(27,40,56,.94);color:#dfe6ec;font-size:14px;line-height:1.45;text-align:center;box-shadow:0 0 0 1px rgba(102,192,244,.35);z-index:260;pointer-events:none}
.fp-head{position:absolute;left:32px;top:20px;z-index:300;display:flex;align-items:center;gap:14px}
.fp-title{font-size:26px;font-weight:800;color:#fff;letter-spacing:.2px}
.fp-chip{padding:5px 12px;border-radius:3px;font-size:13px;font-weight:700;background:rgba(87,203,222,.16);color:#57cbde}
.fp-chip.game{background:rgba(144,186,60,.18);color:#90ba3c}
.fp-chip.live{background:rgba(102,192,244,.16);color:#66c0f4}
.fp-meta{position:absolute;left:34px;top:58px;z-index:300;font-size:12px;color:#8f98a0}
.fp-card-z{position:absolute;margin:0;width:96px;height:140px;border-radius:4px;background:#1b2838;box-shadow:0 6px 16px rgba(0,0,0,.5),0 0 0 1px rgba(255,255,255,.08);box-sizing:border-box;z-index:3;transition:transform .12s,box-shadow .12s;transform-origin:50% 100%}
.fp-card-z.fp-focus{transform:scale(1.07);box-shadow:0 0 0 3px #fff,0 0 28px rgba(102,192,244,.8),0 10px 24px rgba(0,0,0,.6);z-index:7}
.fp-card-z img,.fp-card-z .fp-fallback{width:100%;height:100%;object-fit:cover;border-radius:4px;display:block}
.fp-fallback{color:#fff;font-weight:800;font-size:28px;display:flex;align-items:center;justify-content:center;text-shadow:0 2px 4px rgba(0,0,0,.4)}
.fp-card-z .fp-nm{position:absolute;left:0;right:0;bottom:0;padding:26px 8px 8px;border-radius:0 0 4px 4px;background:linear-gradient(0deg,rgba(0,0,0,.82),rgba(0,0,0,0));color:#fff;font-size:12px;font-weight:800;line-height:1.15;overflow:hidden;display:-webkit-box;-webkit-line-clamp:2;-webkit-box-orient:vertical}
.fp-badge{position:absolute;right:-8px;top:-8px;min-width:24px;height:24px;padding:0 6px;box-sizing:border-box;border-radius:12px;background:#66c0f4;color:#06121c;font-size:12px;font-weight:800;display:flex;align-items:center;justify-content:center;border:2px solid #121a24;z-index:3}
.fp-badge.live{background:#90ba3c}
.fp-tools{position:absolute;right:32px;top:20px;z-index:300;display:flex;gap:10px}
.fp-tb{position:relative;margin:0;height:36px;padding:0 16px;border-radius:3px;background:rgba(255,255,255,.08);color:#dfe6ec;display:flex;align-items:center;gap:8px;box-sizing:border-box;font-size:14px;font-weight:700;border:0;transition:background .1s}
.fp-tb.fp-focus{background:#fff;color:#0e141b;box-shadow:0 0 18px rgba(102,192,244,.6)}
.fp-tb .fp-badge{right:-7px;top:-7px;min-width:20px;height:20px;font-size:11px}
.fp-hints{position:absolute;right:32px;bottom:76px;display:flex;justify-content:flex-end;align-items:center;gap:22px;padding:8px 14px;border-radius:3px;background:rgba(6,9,13,.82);font-size:15px;font-weight:700;color:#c6d4df;z-index:250;pointer-events:none}
.fp-hints > div{display:flex;align-items:center;gap:8px}
.fp-g{width:24px;height:24px;border-radius:50%;border:2px solid #c6d4df;display:flex;align-items:center;justify-content:center;font-size:12px;font-weight:800;box-sizing:border-box}
.fp-feed{position:absolute;left:32px;bottom:76px;z-index:260;display:flex;flex-direction:column;gap:5px;pointer-events:none}
.fp-feed div{background:rgba(27,40,56,.92);color:#dfe6ec;border-radius:3px;padding:6px 12px;font-size:13px;font-weight:600;max-width:360px;box-shadow:0 0 0 1px rgba(102,192,244,.25);animation:fpIn .35s ease-out}
@keyframes fpIn{from{opacity:0;transform:translateY(8px)}to{opacity:1;transform:none}}
.fp-bubble{position:absolute;left:0;top:0;z-index:400;width:312px;box-sizing:border-box;background:linear-gradient(#2d4a62,#1b2838);border-radius:4px;padding:12px 14px;box-shadow:0 14px 32px rgba(0,0,0,.6),0 0 0 1px rgba(102,192,244,.4);display:flex;gap:12px;align-items:center;pointer-events:none}
.fp-bubble::after{content:"";position:absolute;left:50%;bottom:-9px;margin-left:-9px;border:9px solid transparent;border-bottom:0;border-top-color:#1b2838}
.fp-av{width:50px;height:50px;flex:none;border-radius:3px;background:linear-gradient(145deg,#7ec8ff,#2a6fb5);display:flex;align-items:center;justify-content:center;font-weight:800;font-size:22px;color:#fff;box-shadow:0 0 0 2px #57cbde}
.fp-av.game{box-shadow:0 0 0 2px #90ba3c}.fp-av.away{box-shadow:0 0 0 2px #e0b44f;opacity:.9}.fp-av.off{box-shadow:0 0 0 2px #59616a;opacity:.6}
.fp-bn{font-weight:800;font-size:17px;line-height:1.2;color:#57cbde}
.fp-bn.game{color:#90ba3c}.fp-bn.away{color:#e0b44f}.fp-bn.off{color:#8f98a0}
.fp-bl{font-size:13px;font-weight:600;line-height:1.3;margin-top:2px;color:#c6d4df}
.fp-bs{font-size:12px;color:#8f98a0;margin-top:2px}
.fp-live{display:inline-block;margin-left:8px;padding:1px 7px;border-radius:3px;background:rgba(102,192,244,.2);color:#66c0f4;font-size:10.5px;font-weight:800;vertical-align:middle}
.fp-actions{position:absolute;left:50%;bottom:80px;transform:translateX(-50%);z-index:420;display:flex;gap:8px;background:linear-gradient(#2d4a62,#1b2838);padding:10px 12px;border-radius:4px;box-shadow:0 14px 32px rgba(0,0,0,.6),0 0 0 1px rgba(102,192,244,.4);align-items:center;max-width:96%;flex-wrap:wrap;justify-content:center}
.fp-actions .fp-who{color:#fff;font-weight:800;padding:0 10px 0 4px;font-size:15px;max-width:170px;white-space:nowrap;overflow:hidden;text-overflow:ellipsis}
.fp-act{margin:0;padding:9px 14px;border-radius:3px;background:rgba(255,255,255,.1);color:#dfe6ec;font-weight:700;border:0;box-sizing:border-box}
.fp-act.fp-focus{background:#fff;color:#0e141b;box-shadow:0 0 16px rgba(102,192,244,.6)}
.fp-act.fp-off{opacity:.45}
.fp-card{position:absolute;left:50%;top:50%;transform:translate(-50%,-50%);width:440px;max-width:80%;background:linear-gradient(#2d4a62,#1b2838);border-radius:4px;padding:22px 26px;box-shadow:0 14px 32px rgba(0,0,0,.6),0 0 0 1px rgba(102,192,244,.4);z-index:412;text-align:center;color:#c6d4df}
.fp-card h2{margin:0 0 8px;font-size:20px;color:#fff}
.fp-card p{margin:6px 0;line-height:1.4;color:#c6d4df}
.fp-btn{display:inline-block;margin-top:12px;padding:10px 22px;border-radius:3px;background:rgba(255,255,255,.1);color:#dfe6ec;font-weight:700;cursor:pointer}
.fp-btn.fp-focus{background:#fff;color:#0e141b}
.fp-drawer{position:absolute;right:0;top:0;bottom:74px;width:440px;background:linear-gradient(#1b2838,#121a24);box-shadow:-10px 0 34px rgba(0,0,0,.6),-1px 0 0 rgba(102,192,244,.3);z-index:430;display:flex;flex-direction:column}
.fp-drawer h3{margin:0;padding:22px 20px 4px;font-size:22px;font-weight:800;color:#fff}
.fp-drawer .fp-sub{padding:0 20px 10px;color:#8f98a0;font-size:13px}
.fp-list{overflow-y:auto;flex:1;padding:6px 14px 24px}
.fp-row,.fp-it{display:flex;gap:12px;align-items:center;padding:8px 10px;margin:3px 0;border-radius:3px;background:rgba(255,255,255,.05);box-sizing:border-box}
.fp-row.fp-focus,.fp-it.fp-focus{background:#fff;box-shadow:0 0 16px rgba(102,192,244,.5)}
.fp-row.fp-focus .fp-bn,.fp-row.fp-focus .fp-bs,.fp-it.fp-focus b,.fp-it.fp-focus span{color:#0e141b}
.fp-row .fp-av{width:38px;height:38px;font-size:17px}
.fp-row .fp-bn{font-size:15px}
.fp-it{display:block}
.fp-it b{display:block;font-size:14px;color:#dfe6ec}
.fp-it span{display:block;font-size:12px;color:#8f98a0;margin-top:2px}
.fp-dot{display:inline-block;width:8px;height:8px;border-radius:4px;margin-right:6px;background:#59616a}
.fp-dot.on{background:#57cbde}.fp-dot.game{background:#90ba3c}.fp-dot.busy{background:#d9534f}.fp-dot.away{background:#e0b44f}
`;

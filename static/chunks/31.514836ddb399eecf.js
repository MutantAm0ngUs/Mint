"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[31],{26031:function(t,e,r){r.r(e),r.d(e,{Pack:function(){return v}});var a=r(94871),n=r(73130),s=r(3214),o=r(1604),c=r(9279),d=r(35553),i=r(2593);r(25025),r(70332),r(8455),r(59189),r(71770),r(54098),r(62555),r(23565),r(26219),r(68834),r(61303),r(71497),r(49242),r(70565),r(13670),r(79120),r(42328),r(97604),r(8187),r(19362),r(54730),r(36250),r(85725),r(38730),r(48507),r(38398),r(2090),r(52876),r(86841),r(49561),r(80580),r(54253),r(91559),r(40553),r(26),r(69392),r(62822),r(82037),r(2162),r(64063),r(34161),r(50266),r(98839),r(51375),r(43320),r(65815),r(40721),r(29526),r(24601),r(46878),r(20583),r(92355),r(84194),r(51121),r(32484),r(78435),r(13550);const p=o.z.object({contractAddress:n.cO}),h=p.extend({quantity:s.A}),w=p.extend({tokenId:n.cP}),l=p.extend({tokenId:n.cP,quantity:n.cP}),u=h.omit({quantity:!0}).extend({quantityPerReward:s.A}),g=w,k=l.omit({quantity:!0}).extend({quantityPerReward:n.cP}),f=u.extend({totalRewards:n.cP.default("1")}),A=g,R=k.extend({totalRewards:n.cP.default("1")});o.z.object({erc20Rewards:o.z.array(u).default([]),erc721Rewards:o.z.array(g).default([]),erc1155Rewards:o.z.array(k).default([])});const P=o.z.object({erc20Rewards:o.z.array(f).default([]),erc721Rewards:o.z.array(A).default([]),erc1155Rewards:o.z.array(R).default([])}),y=P.extend({packMetadata:s.N,rewardsPerPack:n.cP.default("1"),openStartTime:n.cQ.default(new Date)});class v extends n.aP{constructor(t,e,r){let s=arguments.length>3&&void 0!==arguments[3]?arguments[3]:{},o=arguments.length>4?arguments[4]:void 0,c=arguments.length>5?arguments[5]:void 0;super(arguments.length>6&&void 0!==arguments[6]?arguments[6]:new n.cB(t,e,o,s.gasless&&"openzeppelin"in s.gasless?{...s,gasless:{openzeppelin:{...s.gasless.openzeppelin,useEOAForwarder:!0}}}:s),r,c),(0,a._)(this,"abi",void 0),(0,a._)(this,"metadata",void 0),(0,a._)(this,"roles",void 0),(0,a._)(this,"encoder",void 0),(0,a._)(this,"events",void 0),(0,a._)(this,"estimator",void 0),(0,a._)(this,"royalties",void 0),(0,a._)(this,"interceptor",void 0),(0,a._)(this,"erc1155",void 0),(0,a._)(this,"owner",void 0),this.abi=o,this.erc1155=new n.aI(this.contractWrapper,this.storage,c),this.metadata=new n.aj(this.contractWrapper,n.cR,this.storage),this.roles=new n.ak(this.contractWrapper,v.contractRoles),this.royalties=new n.al(this.contractWrapper,this.metadata),this.encoder=new n.ai(this.contractWrapper),this.estimator=new n.aT(this.contractWrapper),this.events=new n.aU(this.contractWrapper),this.interceptor=new n.aV(this.contractWrapper),this.owner=new n.aY(this.contractWrapper)}onNetworkUpdated(t){this.contractWrapper.updateSignerOrProvider(t)}getAddress(){return this.contractWrapper.readContract.address}async get(t){return this.erc1155.get(t)}async getAll(t){return this.erc1155.getAll(t)}async getOwned(t){return this.erc1155.getOwned(t)}async getTotalCount(){return this.erc1155.totalCount()}async isTransferRestricted(){return!(await this.contractWrapper.readContract.hasRole((0,n.bx)("transfer"),c.d))}async getPackContents(t){const{contents:e,perUnitAmounts:r}=await this.contractWrapper.readContract.getPackContents(t),a=[],s=[],o=[];for(let c=0;c<e.length;c++){const t=e[c],p=r[c];switch(t.tokenType){case 0:{const e=await(0,n.b5)(this.contractWrapper.getProvider(),t.assetContract),r=d.formatUnits(t.totalAmount,e.decimals);a.push({contractAddress:t.assetContract,quantityPerReward:p.toString(),totalRewards:i.O$.from(r).div(p).toString()});break}case 1:s.push({contractAddress:t.assetContract,tokenId:t.tokenId.toString()});break;case 2:o.push({contractAddress:t.assetContract,tokenId:t.tokenId.toString(),quantityPerReward:p.toString(),totalRewards:i.O$.from(t.totalAmount).div(p).toString()})}}return{erc20Rewards:a,erc721Rewards:s,erc1155Rewards:o}}async create(t){const e=await this.contractWrapper.getSignerAddress();return this.createTo(e,t)}async addPackContents(t,e){const r=await this.contractWrapper.getSignerAddress(),a=P.parse(e),{contents:n,numOfRewardUnits:s}=await this.toPackContentArgs(a),o=await this.contractWrapper.sendTransaction("addPackContents",[t,n,s,r]),c=this.contractWrapper.parseLogs("PackUpdated",o?.logs);if(0===c.length)throw new Error("PackUpdated event not found");const d=c[0].args.packId;return{id:d,receipt:o,data:()=>this.erc1155.get(d)}}async createTo(t,e){const r=await(0,n.cI)(e.packMetadata,this.storage),a=y.parse(e),{erc20Rewards:s,erc721Rewards:o,erc1155Rewards:c}=a,d={erc20Rewards:s,erc721Rewards:o,erc1155Rewards:c},{contents:i,numOfRewardUnits:p}=await this.toPackContentArgs(d),h=await this.contractWrapper.sendTransaction("createPack",[i,p,r,a.openStartTime,a.rewardsPerPack,t]),w=this.contractWrapper.parseLogs("PackCreated",h?.logs);if(0===w.length)throw new Error("PackCreated event not found");const l=w[0].args.packId;return{id:l,receipt:h,data:()=>this.erc1155.get(l)}}async open(t){let e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:1;const r=await this.contractWrapper.sendTransaction("openPack",[t,e],{gasLimit:5e5}),a=this.contractWrapper.parseLogs("PackOpened",r?.logs);if(0===a.length)throw new Error("PackOpened event not found");const s=a[0].args.rewardUnitsDistributed,o=[],c=[],i=[];for(const p of s)switch(p.tokenType){case 0:{const t=await(0,n.b5)(this.contractWrapper.getProvider(),p.assetContract);o.push({contractAddress:p.assetContract,quantityPerReward:d.formatUnits(p.totalAmount,t.decimals).toString()});break}case 1:c.push({contractAddress:p.assetContract,tokenId:p.tokenId.toString()});break;case 2:i.push({contractAddress:p.assetContract,tokenId:p.tokenId.toString(),quantityPerReward:p.totalAmount.toString()})}return{erc20Rewards:o,erc721Rewards:c,erc1155Rewards:i}}async toPackContentArgs(t){const e=[],r=[],{erc20Rewards:a,erc721Rewards:s,erc1155Rewards:o}=t,c=this.contractWrapper.getProvider(),d=await this.contractWrapper.getSignerAddress();for(const i of a){const t=(await(0,n.b6)(c,i.quantityPerReward,i.contractAddress)).mul(i.totalRewards);if(!(await(0,n.cJ)(this.contractWrapper,i.contractAddress,t)))throw new Error(`ERC20 token with contract address "${i.contractAddress}" does not have enough allowance to transfer.\n\nYou can set allowance to the multiwrap contract to transfer these tokens by running:\n\nawait sdk.getToken("${i.contractAddress}").setAllowance("${this.getAddress()}", ${t});\n\n`);r.push(i.totalRewards),e.push({assetContract:i.contractAddress,tokenType:0,totalAmount:t,tokenId:0})}for(const i of s){if(!(await(0,n.cK)(this.contractWrapper.getProvider(),this.getAddress(),i.contractAddress,i.tokenId,d)))throw new Error(`ERC721 token "${i.tokenId}" with contract address "${i.contractAddress}" is not approved for transfer.\n\nYou can give approval the multiwrap contract to transfer this token by running:\n\nawait sdk.getNFTCollection("${i.contractAddress}").setApprovalForToken("${this.getAddress()}", ${i.tokenId});\n\n`);r.push("1"),e.push({assetContract:i.contractAddress,tokenType:1,totalAmount:1,tokenId:i.tokenId})}for(const p of o){if(!(await(0,n.cK)(this.contractWrapper.getProvider(),this.getAddress(),p.contractAddress,p.tokenId,d)))throw new Error(`ERC1155 token "${p.tokenId}" with contract address "${p.contractAddress}" is not approved for transfer.\n\nYou can give approval the multiwrap contract to transfer this token by running:\n\nawait sdk.getEdition("${p.contractAddress}").setApprovalForAll("${this.getAddress()}", true);\n\n`);r.push(p.totalRewards),e.push({assetContract:p.contractAddress,tokenType:2,totalAmount:i.O$.from(p.quantityPerReward).mul(i.O$.from(p.totalRewards)),tokenId:p.tokenId})}return{contents:e,numOfRewardUnits:r}}async call(t){for(var e=arguments.length,r=new Array(e>1?e-1:0),a=1;a<e;a++)r[a-1]=arguments[a];return this.contractWrapper.call(t,...r)}}(0,a._)(v,"contractRoles",["admin","minter","asset","transfer"])}}]);
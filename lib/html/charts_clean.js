

const NAVY='#1e3a5f', RED='#e8334a', GREY='#d1d5db', GREEN='#0f7b55';
Chart.defaults.font.family = "'IBM Plex Sans',system-ui,sans-serif";
Chart.defaults.color = '#6b7280';
Chart.defaults.plugins.legend.display = false;
const charts = {};

function destroyChart(id){if(charts[id]){charts[id].destroy();delete charts[id];}}

function initCharts(){
  if(!charts['chartNPS']){
    const ctx=document.getElementById('chartNPS'); if(!ctx)return;
    charts['chartNPS']=new Chart(ctx,{type:'bar',data:{labels:['eSentire','ReliaQuest','Red Canary','CrowdStrike','SentinelOne','Palo Alto','Microsoft','deepwatch','Secureworks'],datasets:[{data:[10.0,9.3,9.0,8.8,8.7,8.0,7.4,7.0,5.5],backgroundColor:(c)=>c.dataIndex===2?RED:(c.raw>=9?NAVY:GREY),borderRadius:4,borderSkipped:false}]},options:{indexAxis:'y',responsive:true,maintainAspectRatio:false,plugins:{tooltip:{callbacks:{label:c=>' '+c.raw.toFixed(1)+' / 10'}}},scales:{x:{min:0,max:10,grid:{color:'#f3f4f6'},ticks:{font:{family:"'JetBrains Mono',monospace",size:11}}},y:{grid:{display:false},ticks:{font:{size:12}}}}}});
  }
  if(!charts['chartRep']){
    const ctx=document.getElementById('chartRep'); if(!ctx)return;
    charts['chartRep']=new Chart(ctx,{type:'bar',data:{labels:['ReliaQuest','eSentire','Red Canary','CrowdStrike','Microsoft','SentinelOne','deepwatch','Palo Alto','Secureworks'],datasets:[{data:[9.7,9.0,8.8,8.5,8.2,8.0,8.0,6.0,5.5],backgroundColor:(c)=>c.dataIndex===2?RED:(c.raw>=9?NAVY:GREY),borderRadius:4,borderSkipped:false}]},options:{indexAxis:'y',responsive:true,maintainAspectRatio:false,plugins:{tooltip:{callbacks:{label:c=>' '+c.raw.toFixed(1)+' / 10'}}},scales:{x:{min:0,max:10,grid:{color:'#f3f4f6'},ticks:{font:{family:"'JetBrains Mono',monospace",size:11}}},y:{grid:{display:false},ticks:{font:{size:12}}}}}});
  }
  if(!charts['chartCost']){
    const ctx=document.getElementById('chartCost'); if(!ctx)return;
    charts['chartCost']=new Chart(ctx,{type:'doughnut',data:{labels:['Significantly less expensive','Somewhat less expensive','About the same','Somewhat more expensive'],datasets:[{data:[67,17,8,8],backgroundColor:[GREEN,NAVY,'#9ca3af',RED],borderWidth:0,hoverOffset:6}]},options:{responsive:true,maintainAspectRatio:false,cutout:'68%',plugins:{legend:{display:true,position:'bottom',labels:{font:{size:11},padding:12,boxWidth:10,usePointStyle:true}},tooltip:{callbacks:{label:c=>' '+c.label+': '+c.raw+'%'}}}}});
  }
  if(!charts['chartDrivers']){
    const ctx=document.getElementById('chartDrivers'); if(!ctx)return;
    charts['chartDrivers']=new Chart(ctx,{type:'bar',data:{labels:['24/7 Monitoring Need','Limited Internal Staff','Faster Threat Detection','Cost of In-House SecOps','Complexity of Alerts','Program Modernization','Compliance Requirements','Cloud Security Needs','Recent Security Incident'],datasets:[{label:'Red Canary',data:[81,77,65,58,35,35,15,15,8],backgroundColor:NAVY,borderRadius:3,borderSkipped:false},{l
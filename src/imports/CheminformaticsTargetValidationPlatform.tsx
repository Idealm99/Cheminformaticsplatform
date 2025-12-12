import svgPaths from "./svg-p3ddfyg0t7";

function Icon() {
  return (
    <div className="relative shrink-0 size-[20px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
        <g id="Icon">
          <path d={svgPaths.p275d2400} id="Vector" stroke="var(--stroke-0, #45556C)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
          <path d={svgPaths.p1db6d780} id="Vector_2" stroke="var(--stroke-0, #45556C)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
        </g>
      </svg>
    </div>
  );
}

function Button() {
  return (
    <div className="content-stretch flex h-[48px] items-center justify-center relative rounded-[10px] shrink-0 w-full" data-name="Button">
      <Icon />
    </div>
  );
}

function Icon1() {
  return (
    <div className="relative shrink-0 size-[20px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
        <g id="Icon">
          <path d="M10 6.66667V3.33333H6.66667" id="Vector" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
          <path d={svgPaths.p34a15680} id="Vector_2" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
          <path d="M1.66667 11.6667H3.33333" id="Vector_3" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
          <path d="M16.6667 11.6667H18.3333" id="Vector_4" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
          <path d="M12.5 10.8333V12.5" id="Vector_5" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
          <path d="M7.5 10.8333V12.5" id="Vector_6" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
        </g>
      </svg>
    </div>
  );
}

function Button1() {
  return (
    <div className="bg-[#155dfc] content-stretch flex h-[48px] items-center justify-center relative rounded-[10px] shadow-[0px_1px_3px_0px_rgba(0,0,0,0.1),0px_1px_2px_-1px_rgba(0,0,0,0.1)] shrink-0 w-full" data-name="Button">
      <Icon1 />
    </div>
  );
}

function Icon2() {
  return (
    <div className="relative shrink-0 size-[20px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
        <g id="Icon">
          <path d={svgPaths.p2e7662c0} id="Vector" stroke="var(--stroke-0, #45556C)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
          <path d={svgPaths.pbd81000} id="Vector_2" stroke="var(--stroke-0, #45556C)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
          <path d={svgPaths.p2a44e700} id="Vector_3" stroke="var(--stroke-0, #45556C)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
        </g>
      </svg>
    </div>
  );
}

function Button2() {
  return (
    <div className="content-stretch flex h-[48px] items-center justify-center relative rounded-[10px] shrink-0 w-full" data-name="Button">
      <Icon2 />
    </div>
  );
}

function Container() {
  return (
    <div className="basis-0 grow min-h-px min-w-px relative shrink-0 w-[48px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col gap-[8px] items-start relative size-full">
        <Button />
        <Button1 />
        <Button2 />
      </div>
    </div>
  );
}

function Icon3() {
  return (
    <div className="relative shrink-0 size-[20px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
        <g id="Icon">
          <path d={svgPaths.p1beb9580} id="Vector" stroke="var(--stroke-0, #45556C)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
          <path d={svgPaths.p32ab0300} id="Vector_2" stroke="var(--stroke-0, #45556C)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
        </g>
      </svg>
    </div>
  );
}

function Button3() {
  return (
    <div className="bg-slate-200 relative rounded-[3.35544e+07px] shrink-0 size-[48px]" data-name="Button">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-center relative size-full">
        <Icon3 />
      </div>
    </div>
  );
}

function GlobalNavRail() {
  return (
    <div className="bg-slate-50 h-[943px] relative shrink-0 w-[64px]" data-name="GlobalNavRail">
      <div aria-hidden="true" className="absolute border-[0px_1px_0px_0px] border-slate-200 border-solid inset-0 pointer-events-none" />
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-center pl-0 pr-px py-[16px] relative size-full">
        <Container />
        <Button3 />
      </div>
    </div>
  );
}

function Heading() {
  return (
    <div className="h-[20px] relative shrink-0 w-full" data-name="Heading 2">
      <p className="absolute font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[20px] left-0 not-italic text-[#0f172b] text-[14px] text-nowrap top-0 tracking-[-0.1504px] whitespace-pre">Workflow Pipeline</p>
    </div>
  );
}

function Paragraph() {
  return (
    <div className="h-[16px] relative shrink-0 w-full" data-name="Paragraph">
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[16px] left-0 not-italic text-[#62748e] text-[12px] top-0 w-[107px]">6 steps configured</p>
    </div>
  );
}

function Container1() {
  return (
    <div className="h-[71px] relative shrink-0 w-[319px]" data-name="Container">
      <div aria-hidden="true" className="absolute border-[0px_0px_1px] border-slate-200 border-solid inset-0 pointer-events-none" />
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col gap-[2px] items-start pb-px pt-[16px] px-[24px] relative size-full">
        <Heading />
        <Paragraph />
      </div>
    </div>
  );
}

function Icon4() {
  return (
    <div className="h-[20px] overflow-clip relative shrink-0 w-full" data-name="Icon">
      <div className="absolute inset-[8.33%]" data-name="Vector">
        <div className="absolute inset-[-5%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 19 19">
            <path d={svgPaths.p147ca400} id="Vector" stroke="var(--stroke-0, #CAD5E2)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
          </svg>
        </div>
      </div>
    </div>
  );
}

function Container2() {
  return (
    <div className="absolute content-stretch flex flex-col items-start left-0 size-[20px] top-[2px]" data-name="Container">
      <Icon4 />
    </div>
  );
}

function Text() {
  return (
    <div className="absolute h-[16px] left-0 top-[3px] w-[35.063px]" data-name="Text">
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[16px] left-0 not-italic text-[#62748e] text-[12px] top-0 w-[36px]">Step 1</p>
    </div>
  );
}

function Icon5() {
  return (
    <div className="relative shrink-0 size-[12px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 12 12">
        <g id="Icon">
          <path d={svgPaths.p2d0bc00} id="Vector" stroke="var(--stroke-0, #8200DB)" strokeLinecap="round" strokeLinejoin="round" />
          <path d="M3.2265 7.5H8.7735" id="Vector_2" stroke="var(--stroke-0, #8200DB)" strokeLinecap="round" strokeLinejoin="round" />
          <path d="M4.25 1H7.75" id="Vector_3" stroke="var(--stroke-0, #8200DB)" strokeLinecap="round" strokeLinejoin="round" />
        </g>
      </svg>
    </div>
  );
}

function Text1() {
  return (
    <div className="basis-0 grow h-[16px] min-h-px min-w-px relative shrink-0" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-start relative size-full">
        <p className="capitalize font-['Inter:Regular',sans-serif] font-normal leading-[16px] not-italic relative shrink-0 text-[#8200db] text-[12px] text-nowrap whitespace-pre">target</p>
      </div>
    </div>
  );
}

function Container3() {
  return (
    <div className="absolute bg-purple-50 content-stretch flex gap-[4px] h-[22px] items-center left-[43.06px] px-[7px] py-px rounded-[4px] top-0 w-[65.922px]" data-name="Container">
      <div aria-hidden="true" className="absolute border border-[#e9d4ff] border-solid inset-0 pointer-events-none rounded-[4px]" />
      <Icon5 />
      <Text1 />
    </div>
  );
}

function Container4() {
  return (
    <div className="h-[22px] relative shrink-0 w-full" data-name="Container">
      <Text />
      <Container3 />
    </div>
  );
}

function Heading1() {
  return (
    <div className="h-[20px] relative shrink-0 w-full" data-name="Heading 3">
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[20px] left-0 not-italic text-[#0f172b] text-[14px] text-nowrap top-0 tracking-[-0.1504px] whitespace-pre">Target Identification</p>
    </div>
  );
}

function Container5() {
  return (
    <div className="absolute content-stretch flex flex-col gap-[4px] h-[46px] items-start left-[32px] top-0 w-[194px]" data-name="Container">
      <Container4 />
      <Heading1 />
    </div>
  );
}

function Container6() {
  return (
    <div className="h-[46px] relative shrink-0 w-full" data-name="Container">
      <Container2 />
      <Container5 />
    </div>
  );
}

function Container7() {
  return (
    <div className="bg-white h-[80px] relative rounded-[10px] shrink-0 w-full" data-name="Container">
      <div aria-hidden="true" className="absolute border border-slate-200 border-solid inset-0 pointer-events-none rounded-[10px]" />
      <div className="size-full">
        <div className="content-stretch flex flex-col items-start pb-px pt-[17px] px-[17px] relative size-full">
          <Container6 />
        </div>
      </div>
    </div>
  );
}

function Container8() {
  return <div className="absolute bg-slate-200 h-[28px] left-[129px] top-0 w-[2px]" data-name="Container" />;
}

function Icon6() {
  return (
    <div className="relative shrink-0 size-[14px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 14 14">
        <g id="Icon">
          <path d="M2.91667 7H11.0833" id="Vector" stroke="var(--stroke-0, #90A1B9)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.16667" />
          <path d="M7 2.91667V11.0833" id="Vector_2" stroke="var(--stroke-0, #90A1B9)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.16667" />
        </g>
      </svg>
    </div>
  );
}

function Button4() {
  return (
    <div className="absolute bg-white content-stretch flex items-center justify-center left-[116px] p-px rounded-[3.35544e+07px] size-[28px] top-0" data-name="Button">
      <div aria-hidden="true" className="absolute border border-[#cad5e2] border-solid inset-0 pointer-events-none rounded-[3.35544e+07px] shadow-[0px_1px_3px_0px_rgba(0,0,0,0.1),0px_1px_2px_-1px_rgba(0,0,0,0.1)]" />
      <Icon6 />
    </div>
  );
}

function Container9() {
  return (
    <div className="h-[28px] relative shrink-0 w-full" data-name="Container">
      <Container8 />
      <Button4 />
    </div>
  );
}

function Container10() {
  return (
    <div className="content-stretch flex flex-col gap-[12px] h-[120px] items-start relative shrink-0 w-full" data-name="Container">
      <Container7 />
      <Container9 />
    </div>
  );
}

function Container11() {
  return (
    <div className="bg-white relative rounded-[3.35544e+07px] shrink-0 size-[8px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid size-full" />
    </div>
  );
}

function Container12() {
  return (
    <div className="absolute bg-[#155dfc] content-stretch flex items-center justify-center left-0 rounded-[3.35544e+07px] size-[20px] top-[2px]" data-name="Container">
      <Container11 />
    </div>
  );
}

function Text2() {
  return (
    <div className="absolute h-[16px] left-0 top-[3px] w-[36.734px]" data-name="Text">
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[16px] left-0 not-italic text-[#62748e] text-[12px] top-0 w-[37px]">Step 2</p>
    </div>
  );
}

function Icon7() {
  return (
    <div className="relative shrink-0 size-[12px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 12 12">
        <g clipPath="url(#clip0_18_857)" id="Icon">
          <path d={svgPaths.p27786a80} id="Vector" stroke="var(--stroke-0, #007A55)" strokeLinecap="round" strokeLinejoin="round" />
          <path d="M4.25 4.25L7.75 7.75" id="Vector_2" stroke="var(--stroke-0, #007A55)" strokeLinecap="round" strokeLinejoin="round" />
        </g>
        <defs>
          <clipPath id="clip0_18_857">
            <rect fill="white" height="12" width="12" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function Text3() {
  return (
    <div className="basis-0 grow h-[16px] min-h-px min-w-px relative shrink-0" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-start relative size-full">
        <p className="capitalize font-['Inter:Regular',sans-serif] font-normal leading-[16px] not-italic relative shrink-0 text-[#007a55] text-[12px] text-nowrap whitespace-pre">competitor</p>
      </div>
    </div>
  );
}

function Container13() {
  return (
    <div className="absolute bg-emerald-50 content-stretch flex gap-[4px] h-[22px] items-center left-[44.73px] px-[7px] py-px rounded-[4px] top-0 w-[93.563px]" data-name="Container">
      <div aria-hidden="true" className="absolute border border-[#a4f4cf] border-solid inset-0 pointer-events-none rounded-[4px]" />
      <Icon7 />
      <Text3 />
    </div>
  );
}

function Text4() {
  return (
    <div className="absolute bg-blue-100 content-stretch flex h-[22px] items-start left-0 px-[9px] py-[3px] rounded-[4px] top-[30px] w-[53.016px]" data-name="Text">
      <div aria-hidden="true" className="absolute border border-[#bedbff] border-solid inset-0 pointer-events-none rounded-[4px]" />
      <p className="font-['Inter:Regular',sans-serif] font-normal leading-[16px] not-italic relative shrink-0 text-[#1447e6] text-[12px] text-nowrap whitespace-pre">Active</p>
    </div>
  );
}

function Container14() {
  return (
    <div className="h-[52px] relative shrink-0 w-full" data-name="Container">
      <Text2 />
      <Container13 />
      <Text4 />
    </div>
  );
}

function Heading2() {
  return (
    <div className="h-[20px] relative shrink-0 w-full" data-name="Heading 3">
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[20px] left-0 not-italic text-[#0f172b] text-[14px] text-nowrap top-0 tracking-[-0.1504px] whitespace-pre">Competitor Drug Search</p>
    </div>
  );
}

function Icon8() {
  return (
    <div className="h-[12px] overflow-clip relative shrink-0 w-full" data-name="Icon">
      <div className="absolute inset-[8.33%_16.66%]" data-name="Vector">
        <div className="absolute inset-[-5%_-6.25%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 9 11">
            <path d={svgPaths.p1010d8a0} id="Vector" stroke="var(--stroke-0, #62748E)" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </div>
      </div>
      <div className="absolute inset-[62.5%_26.89%_37.5%_26.89%]" data-name="Vector">
        <div className="absolute inset-[-0.5px_-9.01%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 7 1">
            <path d="M0.5 0.5H6.047" id="Vector" stroke="var(--stroke-0, #62748E)" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </div>
      </div>
      <div className="absolute inset-[8.33%_35.42%_91.67%_35.42%]" data-name="Vector">
        <div className="absolute inset-[-0.5px_-14.29%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 5 1">
            <path d="M0.5 0.5H4" id="Vector" stroke="var(--stroke-0, #62748E)" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </div>
      </div>
    </div>
  );
}

function Button5() {
  return (
    <div className="bg-slate-50 relative rounded-[4px] shrink-0 size-[22px]" data-name="Button">
      <div aria-hidden="true" className="absolute border border-slate-200 border-solid inset-0 pointer-events-none rounded-[4px]" />
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start pb-px pt-[5px] px-[5px] relative size-full">
        <Icon8 />
      </div>
    </div>
  );
}

function Icon9() {
  return (
    <div className="h-[12px] overflow-clip relative shrink-0 w-full" data-name="Icon">
      <div className="absolute inset-[8.39%]" data-name="Vector">
        <div className="absolute inset-[-5.01%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 11 11">
            <path d={svgPaths.p38144500} id="Vector" stroke="var(--stroke-0, #1447E6)" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </div>
      </div>
      <div className="absolute inset-[35.42%]" data-name="Vector">
        <div className="absolute inset-[-14.29%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 5 5">
            <path d="M0.5 0.5L4 4" id="Vector" stroke="var(--stroke-0, #1447E6)" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </div>
      </div>
    </div>
  );
}

function Button6() {
  return (
    <div className="bg-blue-100 relative rounded-[4px] shrink-0 size-[22px]" data-name="Button">
      <div aria-hidden="true" className="absolute border border-[#8ec5ff] border-solid inset-0 pointer-events-none rounded-[4px]" />
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start pb-px pt-[5px] px-[5px] relative size-full">
        <Icon9 />
      </div>
    </div>
  );
}

function Icon10() {
  return (
    <div className="h-[12px] overflow-clip relative shrink-0 w-full" data-name="Icon">
      <div className="absolute inset-[45.83%]" data-name="Vector">
        <div className="absolute inset-[-50%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 2 2">
            <path d={svgPaths.p26497300} id="Vector" stroke="var(--stroke-0, #62748E)" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </div>
      </div>
      <div className="absolute inset-[12.52%]" data-name="Vector">
        <div className="absolute inset-[-5.56%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 10 10">
            <path d={svgPaths.p13662300} id="Vector" stroke="var(--stroke-0, #62748E)" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </div>
      </div>
      <div className="absolute inset-[12.52%]" data-name="Vector">
        <div className="absolute inset-[-5.56%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 10 10">
            <path d={svgPaths.p8e25c80} id="Vector" stroke="var(--stroke-0, #62748E)" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </div>
      </div>
    </div>
  );
}

function Button7() {
  return (
    <div className="bg-slate-50 relative rounded-[4px] shrink-0 size-[22px]" data-name="Button">
      <div aria-hidden="true" className="absolute border border-slate-200 border-solid inset-0 pointer-events-none rounded-[4px]" />
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start pb-px pt-[5px] px-[5px] relative size-full">
        <Icon10 />
      </div>
    </div>
  );
}

function Icon11() {
  return (
    <div className="h-[12px] overflow-clip relative shrink-0 w-full" data-name="Icon">
      <div className="absolute inset-[8.33%]" data-name="Vector">
        <div className="absolute inset-[-5%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 11 11">
            <path d={svgPaths.p16fbdc80} id="Vector" stroke="var(--stroke-0, #62748E)" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </div>
      </div>
    </div>
  );
}

function Button8() {
  return (
    <div className="bg-slate-50 relative rounded-[4px] shrink-0 size-[22px]" data-name="Button">
      <div aria-hidden="true" className="absolute border border-slate-200 border-solid inset-0 pointer-events-none rounded-[4px]" />
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start pb-px pt-[5px] px-[5px] relative size-full">
        <Icon11 />
      </div>
    </div>
  );
}

function Container15() {
  return (
    <div className="content-stretch flex gap-[4px] h-[22px] items-start relative shrink-0 w-full" data-name="Container">
      <Button5 />
      <Button6 />
      <Button7 />
      <Button8 />
    </div>
  );
}

function Container16() {
  return (
    <div className="absolute content-stretch flex flex-col gap-[4px] h-[106px] items-start left-[32px] top-0 w-[194px]" data-name="Container">
      <Container14 />
      <Heading2 />
      <Container15 />
    </div>
  );
}

function Container17() {
  return (
    <div className="h-[106px] relative shrink-0 w-full" data-name="Container">
      <Container12 />
      <Container16 />
    </div>
  );
}

function Container18() {
  return (
    <div className="bg-blue-50 h-[140px] relative rounded-[10px] shrink-0 w-full" data-name="Container">
      <div aria-hidden="true" className="absolute border border-[#51a2ff] border-solid inset-0 pointer-events-none rounded-[10px] shadow-[0px_0px_0px_2px_#bedbff,0px_1px_3px_0px_rgba(0,0,0,0.1),0px_1px_2px_-1px_rgba(0,0,0,0.1)]" />
      <div className="size-full">
        <div className="content-stretch flex flex-col items-start pb-px pt-[17px] px-[17px] relative size-full">
          <Container17 />
        </div>
      </div>
    </div>
  );
}

function Container19() {
  return <div className="absolute bg-slate-200 h-[28px] left-[129px] top-0 w-[2px]" data-name="Container" />;
}

function Icon12() {
  return (
    <div className="relative shrink-0 size-[14px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 14 14">
        <g id="Icon">
          <path d="M2.91667 7H11.0833" id="Vector" stroke="var(--stroke-0, #90A1B9)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.16667" />
          <path d="M7 2.91667V11.0833" id="Vector_2" stroke="var(--stroke-0, #90A1B9)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.16667" />
        </g>
      </svg>
    </div>
  );
}

function Button9() {
  return (
    <div className="absolute bg-white content-stretch flex items-center justify-center left-[116px] p-px rounded-[3.35544e+07px] size-[28px] top-0" data-name="Button">
      <div aria-hidden="true" className="absolute border border-[#cad5e2] border-solid inset-0 pointer-events-none rounded-[3.35544e+07px] shadow-[0px_1px_3px_0px_rgba(0,0,0,0.1),0px_1px_2px_-1px_rgba(0,0,0,0.1)]" />
      <Icon12 />
    </div>
  );
}

function Container20() {
  return (
    <div className="h-[28px] relative shrink-0 w-full" data-name="Container">
      <Container19 />
      <Button9 />
    </div>
  );
}

function Container21() {
  return (
    <div className="content-stretch flex flex-col gap-[12px] h-[180px] items-start relative shrink-0 w-full" data-name="Container">
      <Container18 />
      <Container20 />
    </div>
  );
}

function Icon13() {
  return (
    <div className="h-[20px] overflow-clip relative shrink-0 w-full" data-name="Icon">
      <div className="absolute inset-[8.33%]" data-name="Vector">
        <div className="absolute inset-[-5%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 19 19">
            <path d={svgPaths.p147ca400} id="Vector" stroke="var(--stroke-0, #00BC7D)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
          </svg>
        </div>
      </div>
      <div className="absolute inset-[41.67%_37.5%]" data-name="Vector">
        <div className="absolute inset-[-25%_-16.67%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 7 5">
            <path d={svgPaths.p184c5900} id="Vector" stroke="var(--stroke-0, #00BC7D)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
          </svg>
        </div>
      </div>
    </div>
  );
}

function Container22() {
  return (
    <div className="absolute content-stretch flex flex-col items-start left-0 size-[20px] top-[2px]" data-name="Container">
      <Icon13 />
    </div>
  );
}

function Text5() {
  return (
    <div className="absolute h-[16px] left-0 top-[3px] w-[37.016px]" data-name="Text">
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[16px] left-0 not-italic text-[#62748e] text-[12px] top-0 w-[38px]">Step 3</p>
    </div>
  );
}

function Icon14() {
  return (
    <div className="relative shrink-0 size-[12px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 12 12">
        <g id="Icon">
          <path d={svgPaths.p188b9f0} id="Vector" stroke="var(--stroke-0, #BB4D00)" strokeLinecap="round" strokeLinejoin="round" />
          <path d={svgPaths.p33114c00} id="Vector_2" stroke="var(--stroke-0, #BB4D00)" strokeLinecap="round" strokeLinejoin="round" />
          <path d={svgPaths.p28b00300} id="Vector_3" stroke="var(--stroke-0, #BB4D00)" strokeLinecap="round" strokeLinejoin="round" />
        </g>
      </svg>
    </div>
  );
}

function Text6() {
  return (
    <div className="basis-0 grow h-[16px] min-h-px min-w-px relative shrink-0" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-start relative size-full">
        <p className="capitalize font-['Inter:Regular',sans-serif] font-normal leading-[16px] not-italic relative shrink-0 text-[#bb4d00] text-[12px] text-nowrap whitespace-pre">structural</p>
      </div>
    </div>
  );
}

function Container23() {
  return (
    <div className="absolute bg-amber-50 content-stretch flex gap-[4px] h-[22px] items-center left-[45.02px] px-[7px] py-px rounded-[4px] top-0 w-[86px]" data-name="Container">
      <div aria-hidden="true" className="absolute border border-[#fee685] border-solid inset-0 pointer-events-none rounded-[4px]" />
      <Icon14 />
      <Text6 />
    </div>
  );
}

function Container24() {
  return (
    <div className="h-[22px] relative shrink-0 w-full" data-name="Container">
      <Text5 />
      <Container23 />
    </div>
  );
}

function Heading3() {
  return (
    <div className="h-[20px] relative shrink-0 w-full" data-name="Heading 3">
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[20px] left-0 not-italic text-[#0f172b] text-[14px] text-nowrap top-0 tracking-[-0.1504px] whitespace-pre">Structural Analysis</p>
    </div>
  );
}

function Container25() {
  return (
    <div className="absolute content-stretch flex flex-col gap-[4px] h-[46px] items-start left-[32px] top-0 w-[194px]" data-name="Container">
      <Container24 />
      <Heading3 />
    </div>
  );
}

function Container26() {
  return (
    <div className="h-[46px] relative shrink-0 w-full" data-name="Container">
      <Container22 />
      <Container25 />
    </div>
  );
}

function Container27() {
  return (
    <div className="bg-white h-[80px] relative rounded-[10px] shrink-0 w-full" data-name="Container">
      <div aria-hidden="true" className="absolute border border-slate-200 border-solid inset-0 pointer-events-none rounded-[10px]" />
      <div className="size-full">
        <div className="content-stretch flex flex-col items-start pb-px pt-[17px] px-[17px] relative size-full">
          <Container26 />
        </div>
      </div>
    </div>
  );
}

function Container28() {
  return <div className="absolute bg-[#a4f4cf] h-[28px] left-[129px] top-0 w-[2px]" data-name="Container" />;
}

function Icon15() {
  return (
    <div className="relative shrink-0 size-[14px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 14 14">
        <g id="Icon">
          <path d="M2.91667 7H11.0833" id="Vector" stroke="var(--stroke-0, #90A1B9)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.16667" />
          <path d="M7 2.91667V11.0833" id="Vector_2" stroke="var(--stroke-0, #90A1B9)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.16667" />
        </g>
      </svg>
    </div>
  );
}

function Button10() {
  return (
    <div className="absolute bg-white content-stretch flex items-center justify-center left-[116px] p-px rounded-[3.35544e+07px] size-[28px] top-0" data-name="Button">
      <div aria-hidden="true" className="absolute border border-[#cad5e2] border-solid inset-0 pointer-events-none rounded-[3.35544e+07px] shadow-[0px_1px_3px_0px_rgba(0,0,0,0.1),0px_1px_2px_-1px_rgba(0,0,0,0.1)]" />
      <Icon15 />
    </div>
  );
}

function Container29() {
  return (
    <div className="h-[28px] relative shrink-0 w-full" data-name="Container">
      <Container28 />
      <Button10 />
    </div>
  );
}

function Container30() {
  return (
    <div className="content-stretch flex flex-col gap-[12px] h-[120px] items-start relative shrink-0 w-full" data-name="Container">
      <Container27 />
      <Container29 />
    </div>
  );
}

function Icon16() {
  return (
    <div className="h-[20px] overflow-clip relative shrink-0 w-full" data-name="Icon">
      <div className="absolute inset-[8.33%]" data-name="Vector">
        <div className="absolute inset-[-5%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 19 19">
            <path d={svgPaths.p147ca400} id="Vector" stroke="var(--stroke-0, #CAD5E2)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
          </svg>
        </div>
      </div>
    </div>
  );
}

function Container31() {
  return (
    <div className="absolute content-stretch flex flex-col items-start left-0 size-[20px] top-[2px]" data-name="Container">
      <Icon16 />
    </div>
  );
}

function Text7() {
  return (
    <div className="absolute h-[16px] left-0 top-[3px] w-[37.219px]" data-name="Text">
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[16px] left-0 not-italic text-[#62748e] text-[12px] top-0 w-[38px]">Step 4</p>
    </div>
  );
}

function Icon17() {
  return (
    <div className="relative shrink-0 size-[12px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 12 12">
        <g clipPath="url(#clip0_18_797)" id="Icon">
          <path d={svgPaths.p3e7757b0} id="Vector" stroke="var(--stroke-0, #314158)" strokeLinecap="round" strokeLinejoin="round" />
        </g>
        <defs>
          <clipPath id="clip0_18_797">
            <rect fill="white" height="12" width="12" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function Text8() {
  return (
    <div className="basis-0 grow h-[16px] min-h-px min-w-px relative shrink-0" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-start relative size-full">
        <p className="capitalize font-['Inter:Regular',sans-serif] font-normal leading-[16px] not-italic relative shrink-0 text-[#314158] text-[12px] text-nowrap whitespace-pre">custom</p>
      </div>
    </div>
  );
}

function Container32() {
  return (
    <div className="absolute bg-slate-50 content-stretch flex gap-[4px] h-[22px] items-center left-[45.22px] px-[7px] py-px rounded-[4px] top-0 w-[73.625px]" data-name="Container">
      <div aria-hidden="true" className="absolute border border-slate-200 border-solid inset-0 pointer-events-none rounded-[4px]" />
      <Icon17 />
      <Text8 />
    </div>
  );
}

function Container33() {
  return (
    <div className="h-[22px] relative shrink-0 w-full" data-name="Container">
      <Text7 />
      <Container32 />
    </div>
  );
}

function Heading4() {
  return (
    <div className="h-[20px] relative shrink-0 w-full" data-name="Heading 3">
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[20px] left-0 not-italic text-[#0f172b] text-[14px] text-nowrap top-0 tracking-[-0.1504px] whitespace-pre">Step 4</p>
    </div>
  );
}

function Container34() {
  return (
    <div className="absolute content-stretch flex flex-col gap-[4px] h-[46px] items-start left-[32px] top-0 w-[194px]" data-name="Container">
      <Container33 />
      <Heading4 />
    </div>
  );
}

function Container35() {
  return (
    <div className="h-[46px] relative shrink-0 w-full" data-name="Container">
      <Container31 />
      <Container34 />
    </div>
  );
}

function Container36() {
  return (
    <div className="bg-white h-[80px] relative rounded-[10px] shrink-0 w-full" data-name="Container">
      <div aria-hidden="true" className="absolute border border-slate-200 border-solid inset-0 pointer-events-none rounded-[10px]" />
      <div className="size-full">
        <div className="content-stretch flex flex-col items-start pb-px pt-[17px] px-[17px] relative size-full">
          <Container35 />
        </div>
      </div>
    </div>
  );
}

function Container37() {
  return <div className="absolute bg-slate-200 h-[28px] left-[129px] top-0 w-[2px]" data-name="Container" />;
}

function Icon18() {
  return (
    <div className="relative shrink-0 size-[14px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 14 14">
        <g id="Icon">
          <path d="M2.91667 7H11.0833" id="Vector" stroke="var(--stroke-0, #90A1B9)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.16667" />
          <path d="M7 2.91667V11.0833" id="Vector_2" stroke="var(--stroke-0, #90A1B9)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.16667" />
        </g>
      </svg>
    </div>
  );
}

function Button11() {
  return (
    <div className="absolute bg-white content-stretch flex items-center justify-center left-[116px] p-px rounded-[3.35544e+07px] size-[28px] top-0" data-name="Button">
      <div aria-hidden="true" className="absolute border border-[#cad5e2] border-solid inset-0 pointer-events-none rounded-[3.35544e+07px] shadow-[0px_1px_3px_0px_rgba(0,0,0,0.1),0px_1px_2px_-1px_rgba(0,0,0,0.1)]" />
      <Icon18 />
    </div>
  );
}

function Container38() {
  return (
    <div className="h-[28px] relative shrink-0 w-full" data-name="Container">
      <Container37 />
      <Button11 />
    </div>
  );
}

function Container39() {
  return (
    <div className="content-stretch flex flex-col gap-[12px] h-[120px] items-start relative shrink-0 w-full" data-name="Container">
      <Container36 />
      <Container38 />
    </div>
  );
}

function Icon19() {
  return (
    <div className="h-[20px] overflow-clip relative shrink-0 w-full" data-name="Icon">
      <div className="absolute inset-[8.33%]" data-name="Vector">
        <div className="absolute inset-[-5%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 19 19">
            <path d={svgPaths.p147ca400} id="Vector" stroke="var(--stroke-0, #CAD5E2)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
          </svg>
        </div>
      </div>
    </div>
  );
}

function Container40() {
  return (
    <div className="absolute content-stretch flex flex-col items-start left-0 size-[20px] top-[2px]" data-name="Container">
      <Icon19 />
    </div>
  );
}

function Text9() {
  return (
    <div className="absolute h-[16px] left-0 top-[3px] w-[36.906px]" data-name="Text">
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[16px] left-0 not-italic text-[#62748e] text-[12px] top-0 w-[37px]">Step 5</p>
    </div>
  );
}

function Icon20() {
  return (
    <div className="relative shrink-0 size-[12px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 12 12">
        <g clipPath="url(#clip0_18_797)" id="Icon">
          <path d={svgPaths.p3e7757b0} id="Vector" stroke="var(--stroke-0, #314158)" strokeLinecap="round" strokeLinejoin="round" />
        </g>
        <defs>
          <clipPath id="clip0_18_797">
            <rect fill="white" height="12" width="12" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function Text10() {
  return (
    <div className="basis-0 grow h-[16px] min-h-px min-w-px relative shrink-0" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-start relative size-full">
        <p className="capitalize font-['Inter:Regular',sans-serif] font-normal leading-[16px] not-italic relative shrink-0 text-[#314158] text-[12px] text-nowrap whitespace-pre">custom</p>
      </div>
    </div>
  );
}

function Container41() {
  return (
    <div className="absolute bg-slate-50 content-stretch flex gap-[4px] h-[22px] items-center left-[44.91px] px-[7px] py-px rounded-[4px] top-0 w-[73.625px]" data-name="Container">
      <div aria-hidden="true" className="absolute border border-slate-200 border-solid inset-0 pointer-events-none rounded-[4px]" />
      <Icon20 />
      <Text10 />
    </div>
  );
}

function Container42() {
  return (
    <div className="h-[22px] relative shrink-0 w-full" data-name="Container">
      <Text9 />
      <Container41 />
    </div>
  );
}

function Heading5() {
  return (
    <div className="h-[20px] relative shrink-0 w-full" data-name="Heading 3">
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[20px] left-0 not-italic text-[#0f172b] text-[14px] text-nowrap top-0 tracking-[-0.1504px] whitespace-pre">Step 5</p>
    </div>
  );
}

function Container43() {
  return (
    <div className="absolute content-stretch flex flex-col gap-[4px] h-[46px] items-start left-[32px] top-0 w-[194px]" data-name="Container">
      <Container42 />
      <Heading5 />
    </div>
  );
}

function Container44() {
  return (
    <div className="h-[46px] relative shrink-0 w-full" data-name="Container">
      <Container40 />
      <Container43 />
    </div>
  );
}

function Container45() {
  return (
    <div className="bg-white h-[80px] relative rounded-[10px] shrink-0 w-full" data-name="Container">
      <div aria-hidden="true" className="absolute border border-slate-200 border-solid inset-0 pointer-events-none rounded-[10px]" />
      <div className="size-full">
        <div className="content-stretch flex flex-col items-start pb-px pt-[17px] px-[17px] relative size-full">
          <Container44 />
        </div>
      </div>
    </div>
  );
}

function Container46() {
  return <div className="absolute bg-slate-200 h-[28px] left-[129px] top-0 w-[2px]" data-name="Container" />;
}

function Icon21() {
  return (
    <div className="relative shrink-0 size-[14px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 14 14">
        <g id="Icon">
          <path d="M2.91667 7H11.0833" id="Vector" stroke="var(--stroke-0, #90A1B9)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.16667" />
          <path d="M7 2.91667V11.0833" id="Vector_2" stroke="var(--stroke-0, #90A1B9)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.16667" />
        </g>
      </svg>
    </div>
  );
}

function Button12() {
  return (
    <div className="absolute bg-white content-stretch flex items-center justify-center left-[116px] p-px rounded-[3.35544e+07px] size-[28px] top-0" data-name="Button">
      <div aria-hidden="true" className="absolute border border-[#cad5e2] border-solid inset-0 pointer-events-none rounded-[3.35544e+07px] shadow-[0px_1px_3px_0px_rgba(0,0,0,0.1),0px_1px_2px_-1px_rgba(0,0,0,0.1)]" />
      <Icon21 />
    </div>
  );
}

function Container47() {
  return (
    <div className="h-[28px] relative shrink-0 w-full" data-name="Container">
      <Container46 />
      <Button12 />
    </div>
  );
}

function Container48() {
  return (
    <div className="content-stretch flex flex-col gap-[12px] h-[120px] items-start relative shrink-0 w-full" data-name="Container">
      <Container45 />
      <Container47 />
    </div>
  );
}

function Icon22() {
  return (
    <div className="h-[20px] overflow-clip relative shrink-0 w-full" data-name="Icon">
      <div className="absolute inset-[8.33%]" data-name="Vector">
        <div className="absolute inset-[-5%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 19 19">
            <path d={svgPaths.p147ca400} id="Vector" stroke="var(--stroke-0, #CAD5E2)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
          </svg>
        </div>
      </div>
    </div>
  );
}

function Container49() {
  return (
    <div className="absolute content-stretch flex flex-col items-start left-0 size-[20px] top-[2px]" data-name="Container">
      <Icon22 />
    </div>
  );
}

function Text11() {
  return (
    <div className="absolute h-[16px] left-0 top-[3px] w-[37.125px]" data-name="Text">
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[16px] left-0 not-italic text-[#62748e] text-[12px] top-0 w-[38px]">Step 6</p>
    </div>
  );
}

function Icon23() {
  return (
    <div className="relative shrink-0 size-[12px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 12 12">
        <g clipPath="url(#clip0_18_797)" id="Icon">
          <path d={svgPaths.p3e7757b0} id="Vector" stroke="var(--stroke-0, #314158)" strokeLinecap="round" strokeLinejoin="round" />
        </g>
        <defs>
          <clipPath id="clip0_18_797">
            <rect fill="white" height="12" width="12" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function Text12() {
  return (
    <div className="basis-0 grow h-[16px] min-h-px min-w-px relative shrink-0" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-start relative size-full">
        <p className="capitalize font-['Inter:Regular',sans-serif] font-normal leading-[16px] not-italic relative shrink-0 text-[#314158] text-[12px] text-nowrap whitespace-pre">custom</p>
      </div>
    </div>
  );
}

function Container50() {
  return (
    <div className="absolute bg-slate-50 content-stretch flex gap-[4px] h-[22px] items-center left-[45.13px] px-[7px] py-px rounded-[4px] top-0 w-[73.625px]" data-name="Container">
      <div aria-hidden="true" className="absolute border border-slate-200 border-solid inset-0 pointer-events-none rounded-[4px]" />
      <Icon23 />
      <Text12 />
    </div>
  );
}

function Container51() {
  return (
    <div className="h-[22px] relative shrink-0 w-full" data-name="Container">
      <Text11 />
      <Container50 />
    </div>
  );
}

function Heading6() {
  return (
    <div className="h-[20px] relative shrink-0 w-full" data-name="Heading 3">
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[20px] left-0 not-italic text-[#0f172b] text-[14px] text-nowrap top-0 tracking-[-0.1504px] whitespace-pre">Step 5</p>
    </div>
  );
}

function Container52() {
  return (
    <div className="absolute content-stretch flex flex-col gap-[4px] h-[46px] items-start left-[32px] top-0 w-[194px]" data-name="Container">
      <Container51 />
      <Heading6 />
    </div>
  );
}

function Container53() {
  return (
    <div className="h-[46px] relative shrink-0 w-full" data-name="Container">
      <Container49 />
      <Container52 />
    </div>
  );
}

function Container54() {
  return (
    <div className="bg-white h-[80px] relative rounded-[10px] shrink-0 w-full" data-name="Container">
      <div aria-hidden="true" className="absolute border border-slate-200 border-solid inset-0 pointer-events-none rounded-[10px]" />
      <div className="size-full">
        <div className="content-stretch flex flex-col items-start pb-px pt-[17px] px-[17px] relative size-full">
          <Container53 />
        </div>
      </div>
    </div>
  );
}

function Container55() {
  return (
    <div className="content-stretch flex flex-col gap-[12px] h-[800px] items-start relative shrink-0 w-full" data-name="Container">
      <Container10 />
      <Container21 />
      <Container30 />
      <Container39 />
      <Container48 />
      <Container54 />
    </div>
  );
}

function Container56() {
  return (
    <div className="basis-0 grow min-h-px min-w-px relative shrink-0 w-[319px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start overflow-clip pb-0 pl-[24px] pr-[35px] pt-[-27px] relative rounded-[inherit] size-full">
        <Container55 />
      </div>
    </div>
  );
}

function Icon24() {
  return (
    <div className="absolute left-[101.8px] size-[16px] top-[13px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="Icon">
          <path d="M3.33333 8H12.6667" id="Vector" stroke="var(--stroke-0, #45556C)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
          <path d="M8 3.33333V12.6667" id="Vector_2" stroke="var(--stroke-0, #45556C)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
        </g>
      </svg>
    </div>
  );
}

function Button13() {
  return (
    <div className="bg-slate-50 h-[42px] relative rounded-[10px] shrink-0 w-full" data-name="Button">
      <div aria-hidden="true" className="absolute border border-slate-200 border-solid inset-0 pointer-events-none rounded-[10px]" />
      <Icon24 />
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[20px] left-[156.3px] not-italic text-[#45556c] text-[14px] text-center text-nowrap top-[11px] tracking-[-0.1504px] translate-x-[-50%] whitespace-pre">Add Step</p>
    </div>
  );
}

function Container57() {
  return (
    <div className="h-[75px] relative shrink-0 w-[319px]" data-name="Container">
      <div aria-hidden="true" className="absolute border-[1px_0px_0px] border-slate-200 border-solid inset-0 pointer-events-none" />
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start pb-0 pt-[17px] px-[16px] relative size-full">
        <Button13 />
      </div>
    </div>
  );
}

function WorkflowEditor() {
  return (
    <div className="bg-white h-[943px] relative shrink-0 w-[320px]" data-name="WorkflowEditor">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start overflow-clip pl-0 pr-px py-0 relative rounded-[inherit] size-full">
        <Container1 />
        <Container56 />
        <Container57 />
      </div>
      <div aria-hidden="true" className="absolute border-[0px_1px_0px_0px] border-slate-200 border-solid inset-0 pointer-events-none" />
    </div>
  );
}

function Icon25() {
  return (
    <div className="relative shrink-0 size-[16px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g clipPath="url(#clip0_18_787)" id="Icon">
          <path d={svgPaths.p3d7ca200} id="Vector" stroke="var(--stroke-0, #155DFC)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
          <path d="M13.3333 1.33333V4" id="Vector_2" stroke="var(--stroke-0, #155DFC)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
          <path d="M14.6667 2.66667H12" id="Vector_3" stroke="var(--stroke-0, #155DFC)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
          <path d={svgPaths.p22966600} id="Vector_4" stroke="var(--stroke-0, #155DFC)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
        </g>
        <defs>
          <clipPath id="clip0_18_787">
            <rect fill="white" height="16" width="16" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function Heading7() {
  return (
    <div className="h-[20px] relative shrink-0 w-[216.484px]" data-name="Heading 2">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[20px] left-0 not-italic text-[#0f172b] text-[14px] top-0 tracking-[-0.1504px] w-[217px]">Config: Competitor Drug Search</p>
      </div>
    </div>
  );
}

function Container58() {
  return (
    <div className="content-stretch flex gap-[8px] h-[20px] items-center relative shrink-0 w-full" data-name="Container">
      <Icon25 />
      <Heading7 />
    </div>
  );
}

function Paragraph1() {
  return (
    <div className="content-stretch flex h-[16px] items-start relative shrink-0 w-full" data-name="Paragraph">
      <p className="basis-0 font-['Inter:Regular',sans-serif] font-normal grow leading-[16px] min-h-px min-w-px not-italic relative shrink-0 text-[#62748e] text-[12px]">Competitor Drug Search</p>
    </div>
  );
}

function Container59() {
  return (
    <div className="h-[71px] relative shrink-0 w-[399px]" data-name="Container">
      <div aria-hidden="true" className="absolute border-[0px_0px_1px] border-slate-200 border-solid inset-0 pointer-events-none" />
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col gap-[2px] items-start pb-px pt-[16px] px-[24px] relative size-full">
        <Container58 />
        <Paragraph1 />
      </div>
    </div>
  );
}

function Icon26() {
  return (
    <div className="absolute left-[13px] size-[16px] top-[15px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="Icon">
          <path d={svgPaths.p1addaf80} id="Vector" stroke="var(--stroke-0, #155DFC)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
          <path d={svgPaths.p19602f00} id="Vector_2" stroke="var(--stroke-0, #155DFC)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
          <path d="M5.33333 8H10.6667" id="Vector_3" stroke="var(--stroke-0, #155DFC)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
        </g>
      </svg>
    </div>
  );
}

function Paragraph2() {
  return (
    <div className="content-stretch flex h-[16px] items-start relative shrink-0 w-full" data-name="Paragraph">
      <p className="basis-0 font-['Inter:Medium',sans-serif] font-medium grow leading-[16px] min-h-px min-w-px not-italic relative shrink-0 text-[#1c398e] text-[12px]">🔗 Input: Target Protein Data (from Step 1)</p>
    </div>
  );
}

function Text13() {
  return (
    <div className="absolute content-stretch flex h-[15px] items-start left-[106.91px] top-0 w-[119.406px]" data-name="Text">
      <p className="font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[16px] not-italic relative shrink-0 text-[#1447e6] text-[12px] text-nowrap whitespace-pre">Target Identification</p>
    </div>
  );
}

function Paragraph3() {
  return (
    <div className="h-[16px] relative shrink-0 w-full" data-name="Paragraph">
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[16px] left-0 not-italic text-[#1447e6] text-[12px] text-nowrap top-0 whitespace-pre">Using results from</p>
      <Text13 />
    </div>
  );
}

function Container60() {
  return (
    <div className="absolute content-stretch flex flex-col gap-[4px] h-[36px] items-start left-[41px] top-[13px] w-[297px]" data-name="Container">
      <Paragraph2 />
      <Paragraph3 />
    </div>
  );
}

function Container61() {
  return (
    <div className="bg-blue-50 h-[62px] relative rounded-[10px] shrink-0 w-full" data-name="Container">
      <div aria-hidden="true" className="absolute border border-[#bedbff] border-solid inset-0 pointer-events-none rounded-[10px]" />
      <Icon26 />
      <Container60 />
    </div>
  );
}

function Label() {
  return (
    <div className="absolute content-stretch flex h-[15px] items-start left-0 top-[6px] w-[156.328px]" data-name="Label">
      <p className="font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[16px] not-italic relative shrink-0 text-[#314158] text-[12px] text-nowrap tracking-[0.6px] uppercase whitespace-pre">Analysis Parameters</p>
    </div>
  );
}

function TextArea() {
  return (
    <div className="absolute bg-white h-[102px] left-0 rounded-[10px] top-[32px] w-[351px]" data-name="Text Area">
      <div className="content-stretch flex items-start overflow-clip px-[12px] py-[10px] relative rounded-[inherit] size-full">
        <p className="font-['Inter:Regular',sans-serif] font-normal leading-[20px] not-italic relative shrink-0 text-[#90a1b9] text-[14px] text-nowrap tracking-[-0.1504px] whitespace-pre">Set criteria for competitor search (e.g., Phase 2+)...</p>
      </div>
      <div aria-hidden="true" className="absolute border border-slate-200 border-solid inset-0 pointer-events-none rounded-[10px]" />
    </div>
  );
}

function Container62() {
  return (
    <div className="h-[140px] relative shrink-0 w-full" data-name="Container">
      <Label />
      <TextArea />
    </div>
  );
}

function Label1() {
  return (
    <div className="absolute content-stretch flex h-[15px] items-start left-0 top-[6px] w-[92.469px]" data-name="Label">
      <p className="font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[16px] not-italic relative shrink-0 text-[#314158] text-[12px] text-nowrap tracking-[0.6px] uppercase whitespace-pre">MCP Servers</p>
    </div>
  );
}

function Paragraph4() {
  return (
    <div className="absolute content-stretch flex h-[16px] items-start left-0 top-[28px] w-[351px]" data-name="Paragraph">
      <p className="basis-0 font-['Inter:Regular',sans-serif] font-normal grow leading-[16px] min-h-px min-w-px not-italic relative shrink-0 text-[#62748e] text-[12px]">Select data sources for analysis</p>
    </div>
  );
}

function Checkbox() {
  return <div className="absolute left-[13px] size-[16px] top-[15px]" data-name="Checkbox" />;
}

function Paragraph5() {
  return (
    <div className="h-[20px] relative shrink-0 w-full" data-name="Paragraph">
      <p className="absolute font-['Inter:Medium',sans-serif] font-medium leading-[20px] left-0 not-italic text-[#0f172b] text-[14px] text-nowrap top-0 tracking-[-0.1504px] whitespace-pre">UniProt</p>
    </div>
  );
}

function Paragraph6() {
  return (
    <div className="content-stretch flex h-[16px] items-start relative shrink-0 w-full" data-name="Paragraph">
      <p className="basis-0 font-['Inter:Regular',sans-serif] font-normal grow leading-[16px] min-h-px min-w-px not-italic relative shrink-0 text-[#62748e] text-[12px]">Protein sequence and functional information</p>
    </div>
  );
}

function Container63() {
  return (
    <div className="absolute content-stretch flex flex-col gap-[2px] h-[38px] items-start left-[41px] top-[13px] w-[267px]" data-name="Container">
      <Paragraph5 />
      <Paragraph6 />
    </div>
  );
}

function Label2() {
  return (
    <div className="bg-blue-50 h-[64px] relative rounded-[10px] shrink-0 w-full" data-name="Label">
      <div aria-hidden="true" className="absolute border border-[#8ec5ff] border-solid inset-0 pointer-events-none rounded-[10px]" />
      <Checkbox />
      <Container63 />
    </div>
  );
}

function Checkbox1() {
  return <div className="absolute left-[13px] size-[16px] top-[15px]" data-name="Checkbox" />;
}

function Paragraph7() {
  return (
    <div className="h-[20px] relative shrink-0 w-full" data-name="Paragraph">
      <p className="absolute font-['Inter:Medium',sans-serif] font-medium leading-[20px] left-0 not-italic text-[#0f172b] text-[14px] text-nowrap top-0 tracking-[-0.1504px] whitespace-pre">InterPro</p>
    </div>
  );
}

function Paragraph8() {
  return (
    <div className="content-stretch flex h-[16px] items-start relative shrink-0 w-full" data-name="Paragraph">
      <p className="basis-0 font-['Inter:Regular',sans-serif] font-normal grow leading-[16px] min-h-px min-w-px not-italic relative shrink-0 text-[#62748e] text-[12px]">Protein families and domains</p>
    </div>
  );
}

function Container64() {
  return (
    <div className="absolute content-stretch flex flex-col gap-[2px] h-[38px] items-start left-[41px] top-[13px] w-[267px]" data-name="Container">
      <Paragraph7 />
      <Paragraph8 />
    </div>
  );
}

function Label3() {
  return (
    <div className="bg-blue-50 h-[64px] relative rounded-[10px] shrink-0 w-full" data-name="Label">
      <div aria-hidden="true" className="absolute border border-[#8ec5ff] border-solid inset-0 pointer-events-none rounded-[10px]" />
      <Checkbox1 />
      <Container64 />
    </div>
  );
}

function Checkbox2() {
  return <div className="absolute left-[13px] size-[16px] top-[15px]" data-name="Checkbox" />;
}

function Paragraph9() {
  return (
    <div className="h-[20px] relative shrink-0 w-full" data-name="Paragraph">
      <p className="absolute font-['Inter:Medium',sans-serif] font-medium leading-[20px] left-0 not-italic text-[#0f172b] text-[14px] text-nowrap top-0 tracking-[-0.1504px] whitespace-pre">RCSB PDB</p>
    </div>
  );
}

function Paragraph10() {
  return (
    <div className="content-stretch flex h-[16px] items-start relative shrink-0 w-full" data-name="Paragraph">
      <p className="basis-0 font-['Inter:Regular',sans-serif] font-normal grow leading-[16px] min-h-px min-w-px not-italic relative shrink-0 text-[#62748e] text-[12px]">Protein Data Bank structures</p>
    </div>
  );
}

function Container65() {
  return (
    <div className="absolute content-stretch flex flex-col gap-[2px] h-[38px] items-start left-[41px] top-[13px] w-[267px]" data-name="Container">
      <Paragraph9 />
      <Paragraph10 />
    </div>
  );
}

function Label4() {
  return (
    <div className="bg-white h-[64px] relative rounded-[10px] shrink-0 w-full" data-name="Label">
      <div aria-hidden="true" className="absolute border border-slate-200 border-solid inset-0 pointer-events-none rounded-[10px]" />
      <Checkbox2 />
      <Container65 />
    </div>
  );
}

function Checkbox3() {
  return <div className="absolute left-[13px] size-[16px] top-[15px]" data-name="Checkbox" />;
}

function Paragraph11() {
  return (
    <div className="h-[20px] relative shrink-0 w-full" data-name="Paragraph">
      <p className="absolute font-['Inter:Medium',sans-serif] font-medium leading-[20px] left-0 not-italic text-[#0f172b] text-[14px] text-nowrap top-0 tracking-[-0.1504px] whitespace-pre">AlphaFold</p>
    </div>
  );
}

function Paragraph12() {
  return (
    <div className="content-stretch flex h-[16px] items-start relative shrink-0 w-full" data-name="Paragraph">
      <p className="basis-0 font-['Inter:Regular',sans-serif] font-normal grow leading-[16px] min-h-px min-w-px not-italic relative shrink-0 text-[#62748e] text-[12px]">Predicted protein structures</p>
    </div>
  );
}

function Container66() {
  return (
    <div className="absolute content-stretch flex flex-col gap-[2px] h-[38px] items-start left-[41px] top-[13px] w-[267px]" data-name="Container">
      <Paragraph11 />
      <Paragraph12 />
    </div>
  );
}

function Label5() {
  return (
    <div className="bg-blue-50 h-[64px] relative rounded-[10px] shrink-0 w-full" data-name="Label">
      <div aria-hidden="true" className="absolute border border-[#8ec5ff] border-solid inset-0 pointer-events-none rounded-[10px]" />
      <Checkbox3 />
      <Container66 />
    </div>
  );
}

function Checkbox4() {
  return <div className="absolute left-[13px] size-[16px] top-[15px]" data-name="Checkbox" />;
}

function Paragraph13() {
  return (
    <div className="h-[20px] relative shrink-0 w-full" data-name="Paragraph">
      <p className="absolute font-['Inter:Medium',sans-serif] font-medium leading-[20px] left-0 not-italic text-[#0f172b] text-[14px] text-nowrap top-0 tracking-[-0.1504px] whitespace-pre">ChEMBL</p>
    </div>
  );
}

function Paragraph14() {
  return (
    <div className="content-stretch flex h-[16px] items-start relative shrink-0 w-full" data-name="Paragraph">
      <p className="basis-0 font-['Inter:Regular',sans-serif] font-normal grow leading-[16px] min-h-px min-w-px not-italic relative shrink-0 text-[#62748e] text-[12px]">Bioactive drug-like molecules</p>
    </div>
  );
}

function Container67() {
  return (
    <div className="absolute content-stretch flex flex-col gap-[2px] h-[38px] items-start left-[41px] top-[13px] w-[267px]" data-name="Container">
      <Paragraph13 />
      <Paragraph14 />
    </div>
  );
}

function Label6() {
  return (
    <div className="bg-blue-50 h-[64px] relative rounded-[10px] shrink-0 w-full" data-name="Label">
      <div aria-hidden="true" className="absolute border border-[#8ec5ff] border-solid inset-0 pointer-events-none rounded-[10px]" />
      <Checkbox4 />
      <Container67 />
    </div>
  );
}

function Checkbox5() {
  return <div className="absolute left-[13px] size-[16px] top-[15px]" data-name="Checkbox" />;
}

function Paragraph15() {
  return (
    <div className="h-[20px] relative shrink-0 w-full" data-name="Paragraph">
      <p className="absolute font-['Inter:Medium',sans-serif] font-medium leading-[20px] left-0 not-italic text-[#0f172b] text-[14px] text-nowrap top-0 tracking-[-0.1504px] whitespace-pre">PubChem</p>
    </div>
  );
}

function Paragraph16() {
  return (
    <div className="content-stretch flex h-[16px] items-start relative shrink-0 w-full" data-name="Paragraph">
      <p className="basis-0 font-['Inter:Regular',sans-serif] font-normal grow leading-[16px] min-h-px min-w-px not-italic relative shrink-0 text-[#62748e] text-[12px]">Chemical compounds database</p>
    </div>
  );
}

function Container68() {
  return (
    <div className="absolute content-stretch flex flex-col gap-[2px] h-[38px] items-start left-[41px] top-[13px] w-[267px]" data-name="Container">
      <Paragraph15 />
      <Paragraph16 />
    </div>
  );
}

function Label7() {
  return (
    <div className="bg-white h-[64px] relative rounded-[10px] shrink-0 w-full" data-name="Label">
      <div aria-hidden="true" className="absolute border border-slate-200 border-solid inset-0 pointer-events-none rounded-[10px]" />
      <Checkbox5 />
      <Container68 />
    </div>
  );
}

function Checkbox6() {
  return <div className="absolute left-[13px] size-[16px] top-[15px]" data-name="Checkbox" />;
}

function Paragraph17() {
  return (
    <div className="h-[20px] relative shrink-0 w-full" data-name="Paragraph">
      <p className="absolute font-['Inter:Medium',sans-serif] font-medium leading-[20px] left-0 not-italic text-[#0f172b] text-[14px] text-nowrap top-0 tracking-[-0.1504px] whitespace-pre">SureChEMBL</p>
    </div>
  );
}

function Paragraph18() {
  return (
    <div className="content-stretch flex h-[16px] items-start relative shrink-0 w-full" data-name="Paragraph">
      <p className="basis-0 font-['Inter:Regular',sans-serif] font-normal grow leading-[16px] min-h-px min-w-px not-italic relative shrink-0 text-[#62748e] text-[12px]">Patent chemistry data</p>
    </div>
  );
}

function Container69() {
  return (
    <div className="absolute content-stretch flex flex-col gap-[2px] h-[38px] items-start left-[41px] top-[13px] w-[267px]" data-name="Container">
      <Paragraph17 />
      <Paragraph18 />
    </div>
  );
}

function Label8() {
  return (
    <div className="bg-white h-[64px] relative rounded-[10px] shrink-0 w-full" data-name="Label">
      <div aria-hidden="true" className="absolute border border-slate-200 border-solid inset-0 pointer-events-none rounded-[10px]" />
      <Checkbox6 />
      <Container69 />
    </div>
  );
}

function Checkbox7() {
  return <div className="absolute left-[13px] size-[16px] top-[15px]" data-name="Checkbox" />;
}

function Paragraph19() {
  return (
    <div className="h-[20px] relative shrink-0 w-full" data-name="Paragraph">
      <p className="absolute font-['Inter:Medium',sans-serif] font-medium leading-[20px] left-0 not-italic text-[#0f172b] text-[14px] text-nowrap top-0 tracking-[-0.1504px] whitespace-pre">ClinicalTrials.gov</p>
    </div>
  );
}

function Paragraph20() {
  return (
    <div className="content-stretch flex h-[16px] items-start relative shrink-0 w-full" data-name="Paragraph">
      <p className="basis-0 font-['Inter:Regular',sans-serif] font-normal grow leading-[16px] min-h-px min-w-px not-italic relative shrink-0 text-[#62748e] text-[12px]">Clinical trial registry</p>
    </div>
  );
}

function Container70() {
  return (
    <div className="absolute content-stretch flex flex-col gap-[2px] h-[38px] items-start left-[41px] top-[13px] w-[267px]" data-name="Container">
      <Paragraph19 />
      <Paragraph20 />
    </div>
  );
}

function Label9() {
  return (
    <div className="bg-white h-[64px] relative rounded-[10px] shrink-0 w-full" data-name="Label">
      <div aria-hidden="true" className="absolute border border-slate-200 border-solid inset-0 pointer-events-none rounded-[10px]" />
      <Checkbox7 />
      <Container70 />
    </div>
  );
}

function Checkbox8() {
  return <div className="absolute left-[13px] size-[16px] top-[15px]" data-name="Checkbox" />;
}

function Paragraph21() {
  return (
    <div className="h-[20px] relative shrink-0 w-full" data-name="Paragraph">
      <p className="absolute font-['Inter:Medium',sans-serif] font-medium leading-[20px] left-0 not-italic text-[#0f172b] text-[14px] text-nowrap top-0 tracking-[-0.1504px] whitespace-pre">openFDA</p>
    </div>
  );
}

function Paragraph22() {
  return (
    <div className="content-stretch flex h-[16px] items-start relative shrink-0 w-full" data-name="Paragraph">
      <p className="basis-0 font-['Inter:Regular',sans-serif] font-normal grow leading-[16px] min-h-px min-w-px not-italic relative shrink-0 text-[#62748e] text-[12px]">FDA adverse events and labels</p>
    </div>
  );
}

function Container71() {
  return (
    <div className="absolute content-stretch flex flex-col gap-[2px] h-[38px] items-start left-[41px] top-[13px] w-[267px]" data-name="Container">
      <Paragraph21 />
      <Paragraph22 />
    </div>
  );
}

function Label10() {
  return (
    <div className="bg-white h-[64px] relative rounded-[10px] shrink-0 w-full" data-name="Label">
      <div aria-hidden="true" className="absolute border border-slate-200 border-solid inset-0 pointer-events-none rounded-[10px]" />
      <Checkbox8 />
      <Container71 />
    </div>
  );
}

function Checkbox9() {
  return <div className="absolute left-[13px] size-[16px] top-[15px]" data-name="Checkbox" />;
}

function Paragraph23() {
  return (
    <div className="h-[20px] relative shrink-0 w-full" data-name="Paragraph">
      <p className="absolute font-['Inter:Medium',sans-serif] font-medium leading-[20px] left-0 not-italic text-[#0f172b] text-[14px] text-nowrap top-0 tracking-[-0.1504px] whitespace-pre">RDKit</p>
    </div>
  );
}

function Paragraph24() {
  return (
    <div className="content-stretch flex h-[16px] items-start relative shrink-0 w-full" data-name="Paragraph">
      <p className="basis-0 font-['Inter:Regular',sans-serif] font-normal grow leading-[16px] min-h-px min-w-px not-italic relative shrink-0 text-[#62748e] text-[12px]">Cheminformatics and molecular modeling</p>
    </div>
  );
}

function Container72() {
  return (
    <div className="absolute content-stretch flex flex-col gap-[2px] h-[38px] items-start left-[41px] top-[13px] w-[267px]" data-name="Container">
      <Paragraph23 />
      <Paragraph24 />
    </div>
  );
}

function Label11() {
  return (
    <div className="bg-blue-50 h-[64px] relative rounded-[10px] shrink-0 w-full" data-name="Label">
      <div aria-hidden="true" className="absolute border border-[#8ec5ff] border-solid inset-0 pointer-events-none rounded-[10px]" />
      <Checkbox9 />
      <Container72 />
    </div>
  );
}

function Checkbox10() {
  return <div className="absolute left-[13px] size-[16px] top-[15px]" data-name="Checkbox" />;
}

function Paragraph25() {
  return (
    <div className="h-[20px] relative shrink-0 w-full" data-name="Paragraph">
      <p className="absolute font-['Inter:Medium',sans-serif] font-medium leading-[20px] left-0 not-italic text-[#0f172b] text-[14px] text-nowrap top-0 tracking-[-0.1504px] whitespace-pre">Google Patents</p>
    </div>
  );
}

function Paragraph26() {
  return (
    <div className="content-stretch flex h-[16px] items-start relative shrink-0 w-full" data-name="Paragraph">
      <p className="basis-0 font-['Inter:Regular',sans-serif] font-normal grow leading-[16px] min-h-px min-w-px not-italic relative shrink-0 text-[#62748e] text-[12px]">Patent search and analysis</p>
    </div>
  );
}

function Container73() {
  return (
    <div className="absolute content-stretch flex flex-col gap-[2px] h-[38px] items-start left-[41px] top-[13px] w-[267px]" data-name="Container">
      <Paragraph25 />
      <Paragraph26 />
    </div>
  );
}

function Label12() {
  return (
    <div className="bg-white h-[64px] relative rounded-[10px] shrink-0 w-full" data-name="Label">
      <div aria-hidden="true" className="absolute border border-slate-200 border-solid inset-0 pointer-events-none rounded-[10px]" />
      <Checkbox10 />
      <Container73 />
    </div>
  );
}

function Container74() {
  return (
    <div className="absolute content-stretch flex flex-col gap-[8px] h-[320px] items-start left-0 overflow-clip pb-0 pl-0 pr-[30px] pt-[-464px] top-[52px] w-[351px]" data-name="Container">
      <Label2 />
      <Label3 />
      <Label4 />
      <Label5 />
      <Label6 />
      <Label7 />
      <Label8 />
      <Label9 />
      <Label10 />
      <Label11 />
      <Label12 />
    </div>
  );
}

function Container75() {
  return (
    <div className="h-[372px] relative shrink-0 w-full" data-name="Container">
      <Label1 />
      <Paragraph4 />
      <Container74 />
    </div>
  );
}

function Text14() {
  return (
    <div className="h-[16px] relative shrink-0 w-[115.766px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-start relative size-full">
        <p className="font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[16px] not-italic relative shrink-0 text-[#314158] text-[12px] text-center text-nowrap tracking-[0.6px] uppercase whitespace-pre">Execution Logs</p>
      </div>
    </div>
  );
}

function Icon27() {
  return (
    <div className="relative shrink-0 size-[16px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="Icon">
          <path d="M4 6L8 10L12 6" id="Vector" stroke="var(--stroke-0, #314158)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
        </g>
      </svg>
    </div>
  );
}

function Button14() {
  return (
    <div className="content-stretch flex h-[16px] items-center justify-between relative shrink-0 w-full" data-name="Button">
      <Text14 />
      <Icon27 />
    </div>
  );
}

function Container76() {
  return (
    <div className="h-[710px] relative shrink-0 w-full" data-name="Container">
      <div className="size-full">
        <div className="content-stretch flex flex-col gap-[24px] items-start pb-0 pt-[24px] px-[24px] relative size-full">
          <Container61 />
          <Container62 />
          <Container75 />
          <Button14 />
        </div>
      </div>
    </div>
  );
}

function Container77() {
  return (
    <div className="basis-0 grow min-h-px min-w-px relative shrink-0 w-[399px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start overflow-clip relative rounded-[inherit] size-full">
        <Container76 />
      </div>
    </div>
  );
}

function Icon28() {
  return (
    <div className="absolute left-[68.7px] size-[16px] top-[16px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="Icon">
          <path d={svgPaths.p2bb5f600} id="Vector" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
        </g>
      </svg>
    </div>
  );
}

function Button15() {
  return (
    <div className="bg-[#155dfc] h-[48px] relative rounded-[10px] shadow-[0px_1px_3px_0px_rgba(0,0,0,0.1),0px_1px_2px_-1px_rgba(0,0,0,0.1)] shrink-0 w-full" data-name="Button">
      <Icon28 />
      <p className="absolute font-['Inter:Medium',sans-serif] font-medium leading-[20px] left-[187.7px] not-italic text-[14px] text-center text-nowrap text-white top-[14px] tracking-[-0.1504px] translate-x-[-50%] whitespace-pre">Run Competitor Drug Search</p>
    </div>
  );
}

function Container78() {
  return (
    <div className="bg-white h-[97px] relative shrink-0 w-[399px]" data-name="Container">
      <div aria-hidden="true" className="absolute border-[1px_0px_0px] border-slate-200 border-solid inset-0 pointer-events-none" />
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start pb-0 pt-[25px] px-[24px] relative size-full">
        <Button15 />
      </div>
    </div>
  );
}

function AgentControlPanel() {
  return (
    <div className="bg-white h-[943px] relative shrink-0 w-[400px]" data-name="AgentControlPanel">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start overflow-clip pl-0 pr-px py-0 relative rounded-[inherit] size-full">
        <Container59 />
        <Container77 />
        <Container78 />
      </div>
      <div aria-hidden="true" className="absolute border-[0px_1px_0px_0px] border-slate-200 border-solid inset-0 pointer-events-none" />
    </div>
  );
}

function Icon29() {
  return (
    <div className="relative shrink-0 size-[32px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 32 32">
        <g id="Icon">
          <path d={svgPaths.p31a6e500} id="Vector" stroke="var(--stroke-0, #155DFC)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.66667" />
        </g>
      </svg>
    </div>
  );
}

function Container79() {
  return (
    <div className="absolute bg-blue-100 content-stretch flex items-center justify-center left-[127.72px] rounded-[3.35544e+07px] size-[64px] top-0" data-name="Container">
      <Icon29 />
    </div>
  );
}

function Heading8() {
  return (
    <div className="absolute h-[28px] left-0 top-[80px] w-[319.453px]" data-name="Heading 3">
      <p className="absolute font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[28px] left-[160px] not-italic text-[#0f172b] text-[18px] text-center top-0 tracking-[-0.4395px] translate-x-[-50%] w-[320px]">Ready to Run Competitor Drug Search</p>
    </div>
  );
}

function Text15() {
  return (
    <div className="absolute content-stretch flex h-[17px] items-start left-[229.41px] top-px w-[26.25px]" data-name="Text">
      <p className="font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[20px] not-italic relative shrink-0 text-[#45556c] text-[14px] text-center text-nowrap tracking-[-0.1504px] whitespace-pre">Run</p>
    </div>
  );
}

function Paragraph27() {
  return (
    <div className="absolute h-[20px] left-0 top-[116px] w-[319.453px]" data-name="Paragraph">
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[20px] left-[118.25px] not-italic text-[#45556c] text-[14px] text-center text-nowrap top-0 tracking-[-0.1504px] translate-x-[-50%] whitespace-pre">Configure your settings and press</p>
      <Text15 />
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[20px] left-[283.66px] not-italic text-[#45556c] text-[14px] text-center text-nowrap top-0 tracking-[-0.1504px] translate-x-[-50%] whitespace-pre">to begin</p>
    </div>
  );
}

function Container80() {
  return (
    <div className="bg-[#00d492] relative rounded-[3.35544e+07px] shrink-0 size-[8px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid size-full" />
    </div>
  );
}

function Text16() {
  return (
    <div className="basis-0 grow h-[16px] min-h-px min-w-px relative shrink-0" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-start relative size-full">
        <p className="font-['Inter:Regular',sans-serif] font-normal leading-[16px] not-italic relative shrink-0 text-[#62748e] text-[12px] text-center text-nowrap whitespace-pre">Tools Ready</p>
      </div>
    </div>
  );
}

function Container81() {
  return (
    <div className="h-[16px] relative shrink-0 w-[82.344px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex gap-[6px] items-center relative size-full">
        <Container80 />
        <Text16 />
      </div>
    </div>
  );
}

function Container82() {
  return (
    <div className="bg-[#51a2ff] relative rounded-[3.35544e+07px] shrink-0 size-[8px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid size-full" />
    </div>
  );
}

function Text17() {
  return (
    <div className="basis-0 grow h-[16px] min-h-px min-w-px relative shrink-0" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-start relative size-full">
        <p className="font-['Inter:Regular',sans-serif] font-normal leading-[16px] not-italic relative shrink-0 text-[#62748e] text-[12px] text-center text-nowrap whitespace-pre">Step Configured</p>
      </div>
    </div>
  );
}

function Container83() {
  return (
    <div className="h-[16px] relative shrink-0 w-[106.406px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex gap-[6px] items-center relative size-full">
        <Container82 />
        <Text17 />
      </div>
    </div>
  );
}

function Container84() {
  return (
    <div className="absolute content-stretch flex gap-[16px] h-[16px] items-center justify-center left-0 pl-0 pr-[0.016px] py-0 top-[160px] w-[319.453px]" data-name="Container">
      <Container81 />
      <Container83 />
    </div>
  );
}

function Container85() {
  return (
    <div className="h-[176px] relative shrink-0 w-full" data-name="Container">
      <Container79 />
      <Heading8 />
      <Paragraph27 />
      <Container84 />
    </div>
  );
}

function ResultCanvas() {
  return (
    <div className="basis-0 bg-slate-50 grow h-[943px] min-h-px min-w-px relative shrink-0" data-name="ResultCanvas">
      <div className="overflow-clip rounded-[inherit] size-full">
        <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start pb-0 pl-[223.766px] pr-[223.781px] pt-[383.5px] relative size-full">
          <Container85 />
        </div>
      </div>
    </div>
  );
}

function App() {
  return (
    <div className="absolute bg-slate-50 content-stretch flex h-[943px] items-start left-0 overflow-clip top-0 w-[1551px]" data-name="App">
      <GlobalNavRail />
      <WorkflowEditor />
      <AgentControlPanel />
      <ResultCanvas />
    </div>
  );
}

function Text18() {
  return (
    <div className="absolute h-[16.5px] left-0 top-[-20000px] w-[7px]" data-name="Text">
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[16.5px] left-0 not-italic text-[11px] text-neutral-950 text-nowrap top-0 tracking-[0.0645px] whitespace-pre">0</p>
    </div>
  );
}

export default function CheminformaticsTargetValidationPlatform() {
  return (
    <div className="bg-white relative size-full" data-name="Cheminformatics Target Validation Platform">
      <App />
      <Text18 />
    </div>
  );
}
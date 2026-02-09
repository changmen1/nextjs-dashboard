/*
 * Author: zxl
 * 文件描述: 简历
 * 创建时间 2025年10月17日 16:23:00
 */
// https://community.vercel.com/t/deployment-failed/25402
// https://grubersjoe.github.io/react-github-calendar/#/?user=changmen1
import GitHubCalendar from 'react-github-calendar';

export default function Page() {
  return (
    <div className="relative z-[999] bg-white flex flex-col justify-center items-center gap-3 max-w-[800px] mx-auto p-[30px] mt-[40px]">
      {/* 头部 */}
      <div className="flex flex-col justify-center items-center gap-y-2 w-full max-w-full mx-auto">
        <div className="text-black/88 text-center tracking-widest text-[24px] font-semibold">
          朱昕龙
        </div>
        <div className="text-[#333] text-center w-full max-w-full text-[14px] font-normal block">
          前端开发 / 技术爱好者 / 4年经验
        </div>
        <div className="text-[#333] flex flex-wrap justify-center items-center gap-y-2 gap-x-5 text-[14px] font-normal">
          <div className="flex justify-center items-center gap-x-2">
            <svg className="w-4 h-4 text-[16px] block" focusable="false" xmlns="http://www.w3.org/2000/svg" viewBox="64 64 896 896" fill="currentColor" width="1em" height="1em"><path d="M877.1 238.7L770.6 132.3c-13-13-30.4-20.3-48.8-20.3s-35.8 7.2-48.8 20.3L558.3 246.8c-13 13-20.3 30.5-20.3 48.9 0 18.5 7.2 35.8 20.3 48.9l89.6 89.7a405.46 405.46 0 01-86.4 127.3c-36.7 36.9-79.6 66-127.2 86.6l-89.6-89.7c-13-13-30.4-20.3-48.8-20.3a68.2 68.2 0 00-48.8 20.3L132.3 673c-13 13-20.3 30.5-20.3 48.9 0 18.5 7.2 35.8 20.3 48.9l106.4 106.4c22.2 22.2 52.8 34.9 84.2 34.9 6.5 0 12.8-.5 19.2-1.6 132.4-21.8 263.8-92.3 369.9-198.3C818 606 888.4 474.6 910.4 342.1c6.3-37.6-6.3-76.3-33.3-103.4zm-37.6 91.5c-19.5 117.9-82.9 235.5-178.4 331s-213 158.9-330.9 178.4c-14.8 2.5-30-2.5-40.8-13.2L184.9 721.9 295.7 611l119.8 120 .9.9 21.6-8a481.29 481.29 0 00285.7-285.8l8-21.6-120.8-120.7 110.8-110.9 104.5 104.5c10.8 10.8 15.8 26 13.3 40.8z"></path></svg>
            +86 17339811909
          </div>
          <div className="flex justify-center items-center gap-x-2">
            <svg focusable="false" xmlns="http://www.w3.org/2000/svg" viewBox="64 64 896 896" fill="currentColor" width="1em" height="1em"><path d="M690.1 377.4c5.9 0 11.8.2 17.6.5-24.4-128.7-158.3-227.1-319.9-227.1C209 150.8 64 271.4 64 420.2c0 81.1 43.6 154.2 111.9 203.6a21.5 21.5 0 019.1 17.6c0 2.4-.5 4.6-1.1 6.9-5.5 20.3-14.2 52.8-14.6 54.3-.7 2.6-1.7 5.2-1.7 7.9 0 5.9 4.8 10.8 10.8 10.8 2.3 0 4.2-.9 6.2-2l70.9-40.9c5.3-3.1 11-5 17.2-5 3.2 0 6.4.5 9.5 1.4 33.1 9.5 68.8 14.8 105.7 14.8 6 0 11.9-.1 17.8-.4-7.1-21-10.9-43.1-10.9-66 0-135.8 132.2-245.8 295.3-245.8zm-194.3-86.5c23.8 0 43.2 19.3 43.2 43.1s-19.3 43.1-43.2 43.1c-23.8 0-43.2-19.3-43.2-43.1s19.4-43.1 43.2-43.1zm-215.9 86.2c-23.8 0-43.2-19.3-43.2-43.1s19.3-43.1 43.2-43.1 43.2 19.3 43.2 43.1-19.4 43.1-43.2 43.1zm586.8 415.6c56.9-41.2 93.2-102 93.2-169.7 0-124-120.8-224.5-269.9-224.5-149 0-269.9 100.5-269.9 224.5S540.9 847.5 690 847.5c30.8 0 60.6-4.4 88.1-12.3 2.6-.8 5.2-1.2 7.9-1.2 5.2 0 9.9 1.6 14.3 4.1l59.1 34c1.7 1 3.3 1.7 5.2 1.7a9 9 0 006.4-2.6 9 9 0 002.6-6.4c0-2.2-.9-4.4-1.4-6.6-.3-1.2-7.6-28.3-12.2-45.3-.5-1.9-.9-3.8-.9-5.7.1-5.9 3.1-11.2 7.6-14.5zM600.2 587.2c-19.9 0-36-16.1-36-35.9 0-19.8 16.1-35.9 36-35.9s36 16.1 36 35.9c0 19.8-16.2 35.9-36 35.9zm179.9 0c-19.9 0-36-16.1-36-35.9 0-19.8 16.1-35.9 36-35.9s36 16.1 36 35.9a36.08 36.08 0 01-36 35.9z"></path></svg>
            zxl1907395787
          </div>
          <div className="flex justify-center items-center gap-x-2">
            <svg focusable="false" xmlns="http://www.w3.org/2000/svg" viewBox="64 64 896 896" fill="currentColor" width="1em" height="1em"><path d="M928 160H96c-17.7 0-32 14.3-32 32v640c0 17.7 14.3 32 32 32h832c17.7 0 32-14.3 32-32V192c0-17.7-14.3-32-32-32zm-40 110.8V792H136V270.8l-27.6-21.5 39.3-50.5 42.8 33.3h643.1l42.8-33.3 39.3 50.5-27.7 21.5zM833.6 232L512 482 190.4 232l-42.8-33.3-39.3 50.5 27.6 21.5 341.6 265.6a55.99 55.99 0 0068.7 0L888 270.8l27.6-21.5-39.3-50.5-42.7 33.2z"></path></svg>
            zhangmen099@gmail.com
          </div>
          <div className="flex justify-center items-center gap-x-2">
            <svg className="w-4 h-4 text-[16px] block" focusable="false" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 1000 1000" width="1000" height="1000"><g fill="none" fillRule="evenodd"><circle cx="500" cy="500" r="500" fill="currentColor"></circle><path fill="#fff" d="M226.328 494.722c145.76-63.505 242.957-105.372 291.59-125.6 138.855-57.755 167.707-67.787 186.513-68.118 4.137-.073 13.385.952 19.375 5.813 5.059 4.104 6.45 9.649 7.117 13.54.666 3.892 1.495 12.757.836 19.684-7.525 79.061-40.084 270.924-56.648 359.474-7.009 37.47-20.81 50.033-34.17 51.262-29.036 2.672-51.085-19.189-79.208-37.624-44.006-28.847-68.867-46.804-111.583-74.953-49.366-32.531-17.364-50.411 10.77-79.631C468.281 550.92 596.214 434.556 598.69 424c.31-1.32.597-6.241-2.326-8.84-2.924-2.598-7.239-1.71-10.353-1.003-4.413 1.002-74.714 47.468-210.902 139.4-19.955 13.702-38.03 20.378-54.223 20.028-17.853-.386-52.194-10.094-77.723-18.393-31.313-10.178-56.2-15.56-54.032-32.846 1.128-9.003 13.527-18.211 37.196-27.624Z"></path></g></svg>
            电报
          </div>
        </div>
      </div>
      {/* github */}
      <div className="overflow-hidden box-border border border-[#d0d7de] rounded-md flex flex-col justify-center items-center w-full md:w-[764px] mx-auto py-2">
        {/* 保持原组件属性不变 */}
        <GitHubCalendar
          username="changmen1"
          fontSize={12}
          hideTotalCount={true}
          hideMonthLabels={false}
          hideColorLegend={false}
          colorScheme="light"
          year={2025}
          blockSize={10}
        />
      </div>
      {/* 个人简介 */}
      <div className="text-black tracking-[1px] text-left w-full mx-auto p-0 text-sm font-normal leading-[24px] block">
        &emsp;&emsp;<strong>4年研发一线深耕</strong>，具备成熟的 2B/2C 大规模复杂业务实战背景，深度践行 <strong>React + TypeScript</strong> 架构体系。
        持<strong>“产品驱动型开发”</strong>理念，具备从需求拆解、交互设计到全栈交付的闭环能力，追求在最小依赖下实现产品价值的最大化。
        面对深层技术挑战，不局限于常规文档，更擅长通过<strong>研读框架源码、追踪 Issues 底层逻辑及逆向实验</strong>寻找终极解决方案。
        推崇<strong>“知行合一”</strong>，坚信卓越的工程实践应始于对底层原理的敬畏，归于对交付结果的极致交付。
      </div>
      {/* 社交信息 */}
      <div className="w-full max-w-full mx-auto">
        <div className="text-[rgba(0,0,0,0.88)] text-start border-b-2 border-[rgba(0,0,0,0.88)] my-2 mb-1 text-[18px] font-semibold leading-[32px]">
          社交信息
        </div>
        <div className="text-[rgba(0,0,0,0.88)] text-start flex items-center gap-x-[6px] text-[15px] font-normal leading-[24px]">
          <svg className="block w-[16px] h-[16px] text-[16px]" focusable="false" xmlns="http://www.w3.org/2000/svg" viewBox="64 64 896 896" fill="currentColor" width="1em" height="1em"><path d="M511.6 76.3C264.3 76.2 64 276.4 64 523.5 64 718.9 189.3 885 363.8 946c23.5 5.9 19.9-10.8 19.9-22.2v-77.5c-135.7 15.9-141.2-73.9-150.3-88.9C215 726 171.5 718 184.5 703c30.9-15.9 62.4 4 98.9 57.9 26.4 39.1 77.9 32.5 104 26 5.7-23.5 17.9-44.5 34.7-60.8-140.6-25.2-199.2-111-199.2-213 0-49.5 16.3-95 48.3-131.7-20.4-60.5 1.9-112.3 4.9-120 58.1-5.2 118.5 41.6 123.2 45.3 33-8.9 70.7-13.6 112.9-13.6 42.4 0 80.2 4.9 113.5 13.9 11.3-8.6 67.3-48.8 121.3-43.9 2.9 7.7 24.7 58.3 5.5 118 32.4 36.8 48.9 82.7 48.9 132.3 0 102.2-59 188.1-200 212.9a127.5 127.5 0 0138.1 91v112.5c.8 9 0 17.9 15 17.9 177.1-59.7 304.6-227 304.6-424.1 0-247.2-200.4-447.3-447.5-447.3z"></path></svg>
          <span className="inline-block min-w-[76px]">GitHub：</span>
          <a href="https://github.com/changmen1" target="_blank" className="overflow-auto underline text-[15px] font-bold">https://github.com/changmen1</a>
        </div>
        <div className="text-[rgba(0,0,0,0.88)] text-start flex items-center gap-x-[6px] text-[15px] font-normal leading-[24px]">
          <svg className="block w-[16px] h-[16px] text-[16px]" focusable="false" xmlns="http://www.w3.org/2000/svg" viewBox="64 64 896 896" fill="currentColor" width="1em" height="1em"><path d="M511.6 76.3C264.3 76.2 64 276.4 64 523.5 64 718.9 189.3 885 363.8 946c23.5 5.9 19.9-10.8 19.9-22.2v-77.5c-135.7 15.9-141.2-73.9-150.3-88.9C215 726 171.5 718 184.5 703c30.9-15.9 62.4 4 98.9 57.9 26.4 39.1 77.9 32.5 104 26 5.7-23.5 17.9-44.5 34.7-60.8-140.6-25.2-199.2-111-199.2-213 0-49.5 16.3-95 48.3-131.7-20.4-60.5 1.9-112.3 4.9-120 58.1-5.2 118.5 41.6 123.2 45.3 33-8.9 70.7-13.6 112.9-13.6 42.4 0 80.2 4.9 113.5 13.9 11.3-8.6 67.3-48.8 121.3-43.9 2.9 7.7 24.7 58.3 5.5 118 32.4 36.8 48.9 82.7 48.9 132.3 0 102.2-59 188.1-200 212.9a127.5 127.5 0 0138.1 91v112.5c.8 9 0 17.9 15 17.9 177.1-59.7 304.6-227 304.6-424.1 0-247.2-200.4-447.3-447.5-447.3z"></path></svg>
          <span className="inline-block min-w-[76px]">掘金：</span>
          <a href="https://juejin.cn/user/2632668054823427" target="_blank" className="overflow-auto underline text-[15px] font-bold">https://juejin.cn/user/2632668054823427</a>
        </div>
        <div className="text-[rgba(0,0,0,0.88)] text-start flex items-center gap-x-[6px] text-[15px] font-normal leading-[24px]">
          <svg className="block w-[16px] h-[16px] text-[16px]" focusable="false" xmlns="http://www.w3.org/2000/svg" viewBox="64 64 896 896" fill="currentColor" width="1em" height="1em"><path d="M511.6 76.3C264.3 76.2 64 276.4 64 523.5 64 718.9 189.3 885 363.8 946c23.5 5.9 19.9-10.8 19.9-22.2v-77.5c-135.7 15.9-141.2-73.9-150.3-88.9C215 726 171.5 718 184.5 703c30.9-15.9 62.4 4 98.9 57.9 26.4 39.1 77.9 32.5 104 26 5.7-23.5 17.9-44.5 34.7-60.8-140.6-25.2-199.2-111-199.2-213 0-49.5 16.3-95 48.3-131.7-20.4-60.5 1.9-112.3 4.9-120 58.1-5.2 118.5 41.6 123.2 45.3 33-8.9 70.7-13.6 112.9-13.6 42.4 0 80.2 4.9 113.5 13.9 11.3-8.6 67.3-48.8 121.3-43.9 2.9 7.7 24.7 58.3 5.5 118 32.4 36.8 48.9 82.7 48.9 132.3 0 102.2-59 188.1-200 212.9a127.5 127.5 0 0138.1 91v112.5c.8 9 0 17.9 15 17.9 177.1-59.7 304.6-227 304.6-424.1 0-247.2-200.4-447.3-447.5-447.3z"></path></svg>
          <span className="inline-block min-w-[76px]">Dev：</span>
          <a href="https://dev.to/changmen1" target="_blank" className="overflow-auto underline text-[15px] font-bold">https://dev.to/changmen1</a>
        </div>
      </div>
      {/* 教育经历 */}
      {/* <div className="w-full max-w-full mx-auto">
        <div className="text-[rgba(0,0,0,0.88)] text-start border-b-2 border-[rgba(0,0,0,0.88)] my-2 mb-1 text-[18px] font-semibold leading-[32px]">
          教育经历
        </div>
        <div className="flex flex-col justify-center items-start w-full max-w-full">
          <div className="flex justify-between items-center w-full max-w-full text-[rgba(0,0,0,0.88)] text-[16px] font-bold leading-[28px]">
            兰州理工大学技术工程学院
            <span className="text-base font-normal leading-6">
              2021/7 – 2023/6
            </span>
          </div>
          <div className="text-[rgba(0,0,0,0.88)] text-sm font-normal leading-6">
            软件工程
          </div>
          <div className="flex justify-between items-center w-full max-w-full text-[rgba(0,0,0,0.88)] text-[16px] font-bold leading-[28px]">
            兰州资源环境技术大学
            <span className="text-base font-normal leading-6">
              2018/7 – 2021/6
            </span>
          </div>
          <div className="text-[rgba(0,0,0,0.88)] text-sm font-normal leading-6">
            机械工程
          </div>
        </div>
      </div> */}
      {/* 技术栈 */}
      <div className="w-full max-w-full mx-auto">
        <div className="text-[rgba(0,0,0,0.88)] text-start border-b-2 border-[rgba(0,0,0,0.88)] my-2 mb-1 text-[18px] font-semibold leading-[32px]">
          相关技能
        </div>
        <ul className="list-disc list-outside pl-[20px]">
          <li>
            深度实践 <span className="text-[#e72326] font-semibold">React + TypeScript</span> 及
            <span className="text-[#e72326] font-semibold">React Native + TypeScript</span>，覆盖 2B / 2C 复杂业务与架构设计，
            具备 <span className="text-[#e72326] font-semibold">Web / RN / Taro / Electron / Tauri</span> 多端落地能力。
          </li>
          <li>
            独立开发 <span className="text-[#e72326] font-semibold">罗非鱼低码平台</span>，
            维护基于 <span className="text-[#e72326] font-semibold">React + TS + TailwindCSS + MUI</span> 的
            <span className="text-[#e72326] font-semibold">Electron 工程化脚手架</span>，
            并实现 <span className="text-[#e72326] font-semibold">串口通信温湿度监测客户端</span>。
            曾为 <span className="text-[#e72326] font-semibold">Ant Design Pro</span>、
            <span className="text-[#e72326] font-semibold">afilmory</span>、
            <span className="text-[#e72326] font-semibold">yatori-go-core</span> 提交 PR。
          </li>
        </ul>
      </div>
      {/* 项目经历 */}
      <div className="w-full max-w-full mx-auto">
        <div className="text-[rgba(0,0,0,0.88)] text-start border-b-2 border-[rgba(0,0,0,0.88)] my-2 mb-1 text-[18px] font-semibold leading-[32px]">
          项目经历
        </div>
        {/* 黄疸管家项目经历 */}
        <div className="mt-8">
          <div className="text-[rgba(0,0,0,0.88)] mt-4 text-lg font-bold leading-8">
            黄疸管家（用户端 / 医生端）
          </div>
          <div className="text-[rgba(0,0,0,0.88)] mt-1 text-lg font-bold leading-8">
            角色
          </div>
          <div>该项目的 <span className="text-[#e72326] font-semibold">主Owner & 独立开发者</span>（负责架构设计与双端全量开发）</div>

          <div className="text-[rgba(0,0,0,0.88)] mt-1 text-lg font-bold leading-8">
            行动
          </div>
          <div>基于 <span className="text-[#e72326] font-semibold">ReactNative</span> 实现跨平台开发，通过 <span className="text-[#e72326] font-semibold">WiFi 与 TCP 协议</span> 直接对接医疗设备，建立稳定通信链路</div>
          <div>实现设备数据的实时上报与处理，针对 <span className="text-[#e72326] font-semibold">历史报警数据</span> 进行了毫秒级监测与可视化图表展示</div>
          <div>深度集成 <span className="text-[#e72326] font-semibold">腾讯云 IM</span>，实现用户与医生间的图文、语音实时问诊，并完成 <span className="text-[#e72326] font-semibold">TPNS 离线推送</span> 优化，确保消息触达率</div>
          <div>完成 <span className="text-[#e72326] font-semibold">支付宝 SDK</span> 集成，构建完整的设备租赁业务流（下单、支付、押金退还）</div>
          <div>利用 <span className="text-[#e72326] font-semibold">Yoga 布局引擎</span> 与高度解耦的组件化方案，确保了复杂医疗数据在不同机型上的渲染一致性</div>

          <div className="text-[rgba(0,0,0,0.88)] mt-1 text-lg font-bold leading-8">
            结果
          </div>
          <div><span className="text-[#e72326] font-semibold">独立完成</span> 了从 0 到 1 的研发闭环，支撑了医疗器械厂家从传统硬件向“硬件+服务”模式的数字化转型</div>
          <div>成功解决了移动端在 TCP 长连接下的 <span className="text-[#e72326] font-semibold">断线重连、粘包处理</span> 等关键技术难点，保障了医疗监测数据的零丢失</div>
          <div>通过抽象 IM 与支付通用模块，使后续关联项目的开发效率提升了 <span className="text-[#e72326] font-semibold">40% 以上</span></div>
        </div>
        <div>
          <div className="text-[rgba(0,0,0,0.88)] mt-4 text-lg font-bold leading-8">
            ICU重症系统 NICU重症系统
          </div>
          <div className="text-[rgba(0,0,0,0.88)] mt-1 text-lg font-bold leading-8">
            角色
          </div>
          <div>ICU重症系统后台管理的 <span className="text-[#e72326] font-semibold">前端技术负责人</span> </div>
          <div className="text-[rgba(0,0,0,0.88)] mt-1 text-lg font-bold leading-8">
            行动
          </div>
          <div>完成对ICU科室的医疗设备系统录入、病人生命体征检测、通过<span className="text-[#e72326] font-semibold">AI进行病情分析</span>、减轻护士工作</div>
          <div>完成ICU科室对<span className="text-[#e72326] font-semibold">体温单</span>、<span className="text-[#e72326] font-semibold">重症单</span>、血滤单等文书文书表单提出的<span className="text-[#e72326] font-semibold">定制化开发</span></div>
          <div>完成<span className="text-[#e72326] font-semibold">戴小维AI模块对接</span></div>
          <div>完成与设备解析-对接婴儿培养箱-输注泵-监护仪-呼吸机-等设备 对数据进行检测</div>
          <div>...</div>
          <div className="text-[rgba(0,0,0,0.88)] mt-1 text-lg font-bold leading-8">
            结果
          </div>
          <div>成功落地浙江省多家医院</div>
          <div><span className="text-[#e72326] font-semibold">产出了部门内部高移植性、与 UI 层高解耦、高扩展性的三测单、体温单、重症单、AI模块组件，可在各大关联业务中极速引入、扩展、定制</span></div>
          <div>集团内目前唯一提交商业化的软件项目</div>
        </div>
        {/* 互联网医院项目经历 */}
        <div className="mt-8">
          <div className="text-[rgba(0,0,0,0.88)] mt-4 text-lg font-bold leading-8"> 互联网医院数字化平台（公众号/小程序/Web双端） </div> <div className="text-[rgba(0,0,0,0.88)] mt-1 text-lg font-bold leading-8"> 角色 </div> <div>该项目的 <span className="text-[#e72326] font-semibold">核心开发者</span>（主导前端整体架构设计与全业务流程实现）</div>
          <div className="text-[rgba(0,0,0,0.88)] mt-1 text-lg font-bold leading-8"> 行动 </div> <div>基于 <span className="text-[#e72326] font-semibold">React + TailwindCSS + Umi</span> 搭建高性能前端架构，深度对接 <span className="text-[#e72326] font-semibold">阿里 RTC</span> 实现低延迟、高可靠的远程音视频问诊功能</div> <div>利用 <span className="text-[#e72326] font-semibold">WebSocket</span> 协议构建实时通讯链路，配合 <span className="text-[#e72326] font-semibold">微信 SDK</span> 完成公众号与小程序之间的无缝跳转、微信支付及静默授权流程</div> <div>针对医疗场景抽象并封装了 <span className="text-[#e72326] font-semibold">通用业务组件库</span>（涵盖音视频通话插件、复杂文件上传、多端适配弹窗等），极大地提升了研发复用率</div> <div>通过 <span className="text-[#e72326] font-semibold">Nginx 反向代理与 Hosts 模拟 HTTPS 环境</span>，解决了本地开发环境与微信线上安全域名限制的调试冲突</div>
          <div className="text-[rgba(0,0,0,0.88)] mt-1 text-lg font-bold leading-8"> 结果 </div> <div>支撑了甘肃医学院附属医院互联网化转型，实现了 <span className="text-[#e72326] font-semibold">从挂号到线上问诊、支付的闭环全流程</span></div> <div>通过组件化重构，使业务响应速度提升，核心页面加载性能优化了 <span className="text-[#e72326] font-semibold">30% 以上</span></div> <div>成功保障了高并发场景下音视频通话的稳定性，实现了问诊消息的 <span className="text-[#e72326] font-semibold">毫秒级触达</span></div>
        </div>
        {/* WebHis项目经历 */}
        <div className="mt-8"> <div className="text-[rgba(0,0,0,0.88)] mt-4 text-lg font-bold leading-8"> WebHis 靖远县基层医疗卫生信息平台 </div> <div className="text-[rgba(0,0,0,0.88)] mt-1 text-lg font-bold leading-8"> 角色 </div> <div>前端 <span className="text-[#e72326] font-semibold">核心开发成员</span>（负责核心业务流开发与复杂医保数据交互）</div>
          <div className="text-[rgba(0,0,0,0.88)] mt-1 text-lg font-bold leading-8"> 行动 </div> <div>基于 <span className="text-[#e72326] font-semibold">React + Ant Design Pro + ahooks</span> 构建 B 端管理系统，处理门诊医生工作站、收费管理、药品进销存等超大型高频业务模块</div> <div>深度集成 <span className="text-[#e72326] font-semibold">医保报销接口</span>，实现了复杂的医保患者授权、对账、退费逻辑，确保财务数据的绝对准确性</div> <div>针对 <span className="text-[#e72326] font-semibold">海量药品进销存数据</span>，设计了高效的表单预加载方案与前端过滤算法，显著降低了长列表渲染压力</div> <div>利用 <span className="text-[#e72326] font-semibold">TypeScript</span> 建立严密的业务数据模型，通过静态类型检查规避了复杂处方逻辑中的潜在风险</div>
          <div className="text-[rgba(0,0,0,0.88)] mt-1 text-lg font-bold leading-8"> 结果 </div> <div>该系统覆盖了靖远县多家基层医疗机构，成功支撑了 <span className="text-[#e72326] font-semibold">日均万级</span> 的处方流转与医保结算</div> <div>通过精细化权限配置模块，实现了 <span className="text-[#e72326] font-semibold">RBAC 级别</span> 的动态菜单与按钮级权限控制</div> <div>提升了基层医疗机构的数字化协同效率，药品盘点准确率达到 <span className="text-[#e72326] font-semibold">100%</span></div>
        </div>
        {/* 自助机项目经历 */}
        <div className="mt-8"> <div className="text-[rgba(0,0,0,0.88)] mt-4 text-lg font-bold leading-8"> 甘肃中医药大学附属医院 - 智能自助终端系统 </div> <div className="text-[rgba(0,0,0,0.88)] mt-1 text-lg font-bold leading-8"> 角色 </div> <div><span className="text-[#e72326] font-semibold">Hybrid 混合开发主程</span>（负责硬件交互层与 H5 业务层通信）</div>
          <div className="text-[rgba(0,0,0,0.88)] mt-1 text-lg font-bold leading-8"> 行动 </div> <div>采用 <span className="text-[#e72326] font-semibold">CefSharp (WinForm + Chromium)</span> 架构，实现了 H5 业务界面与 C# 底层硬件驱动（读卡器、身份证识别、打印机）的深度解耦与双向通信</div> <div>基于 <span className="text-[#e72326] font-semibold">jQuery + EasyUI</span> 优化自助机端的交互性能，通过重写原生 JavaScript 事件处理机制，解决了触屏点击延迟与重复提交问题</div> <div>独立完成 <span className="text-[#e72326] font-semibold">床旁结算与门诊缴费</span> 核心链路，通过 JSBridge 协议实现了身份证手输与物理读取的逻辑兼容</div>
          <div className="text-[rgba(0,0,0,0.88)] mt-1 text-lg font-bold leading-8"> 结果 </div> <div>成功在甘肃中医药大学附属医院部署多台设备，有效缓解了门诊窗口排队压力，窗口排队时间平均减少 <span className="text-[#e72326] font-semibold">50% 以上</span></div> <div>成功解决混合开发中内存泄露与白屏卡死等性能顽疾，确保系统 <span className="text-[#e72326] font-semibold">7*24小时</span> 稳定运行</div>
        </div>
        {/* 门户网站项目经历 */}
        <div className="mt-8"> <div className="text-[rgba(0,0,0,0.88)] mt-4 text-lg font-bold leading-8"> 官网集群及可视化 CMS 管理平台 </div> <div className="text-[rgba(0,0,0,0.88)] mt-1 text-lg font-bold leading-8"> 角色 </div> <div><span className="text-[#e72326] font-semibold">核心开发成员</span>（负责前台门户展示及后台配置系统）</div>
          <div className="text-[rgba(0,0,0,0.88)] mt-1 text-lg font-bold leading-8"> 行动 </div> <div>使用 <span className="text-[#e72326] font-semibold">Vue2 + TypeScript + Element UI</span> 打造高灵活性的后台管理平台，实现医院科室、专家团队及健康教育板块的高度可配置化</div> <div>前端基于 <span className="text-[#e72326] font-semibold">Bootstrap</span> 实现响应式布局，通过 CSS 媒体查询与流式布局技术，保障了在不同分辨率显示器下的视觉一致性</div> <div>针对“图文咨询”与“名医讲堂”模块，封装了高性能的富文本编辑器与多媒体展示组件，提升了信息发布的时效性</div>
          <div className="text-[rgba(0,0,0,0.88)] mt-1 text-lg font-bold leading-8"> 结果 </div> <div>项目上线后成为医院对外展示的核心窗口，实现了 <span className="text-[#e72326] font-semibold">SEO 性能优化</span>，关键词搜索排名显著提升</div> <div>通过 CMS 系统赋能，行政人员维护内容的人效提升了 <span className="text-[#e72326] font-semibold">60%</span></div>
        </div>
      </div>
      {/* 工作经历 */}
      <div className="w-full max-w-full mx-auto">
        <div className="text-[rgba(0,0,0,0.88)] text-start border-b-2 border-[rgba(0,0,0,0.88)] my-2 mb-1 text-[18px] font-semibold leading-[32px]">
          工作经历
        </div>
        <div className="flex flex-col justify-center items-start w-full max-w-full my-2.5">
          <div className="flex justify-between items-center w-full max-w-full text-black/88">
            <div className="text-[18px] font-bold leading-[32px]">
              宁波戴维医疗器械股份有限公司
            </div>
            <div className="text-[16px]">
              2024.1 - 至今
            </div>
          </div>
          <div className="flex justify-start items-center gap-[20px] w-full max-w-full text-black/88 text-[16px] font-bold leading-[32px] relative">
            <div>高级前端开发工程师</div>
            <div>研发中心 • 智慧医疗部门 • 前端组</div>
          </div>
          <ul className="list-disc list-outside pl-[20px]">
            <li>主要负责医院中后台、小程序、医院数字大屏等相关业务开发</li>
            <li>负责项目的开发、维护、优化，确保其高性能和稳定性，高效支撑前端业务的长期迭代</li>
          </ul>
        </div>
        <div className="flex flex-col justify-center items-start w-full max-w-full my-2.5">
          <div className="flex justify-between items-center w-full max-w-full text-black/88">
            <div className="text-[18px] font-bold leading-[32px]">
              兰州新昊源电子科技有限公司
            </div>
            <div className="text-[16px]">
              2022.7 - 2023-10
            </div>
          </div>
          <div className="flex justify-start items-center gap-[20px] w-full max-w-full text-black/88 text-[16px] font-bold leading-[32px] relative">
            <div>前端开发工程师</div>
            <div>研发中心 • 移动互联网部门 • 前端组</div>
          </div>
          <ul className="list-disc list-outside pl-[20px]">
            <li>主要负责医院中后台、互联网医院小程序、医院自助机、医院壁挂机等相关业务开发，医院官网移动端响应式UI改造</li>
            <li>参与组内每周CodeReview积极分享，每月列会项目汇报</li>
          </ul>
        </div>
      </div>
      {/* 在校经历 */}
      <div className="w-full max-w-full mx-auto">
        <div className="text-[rgba(0,0,0,0.88)] text-start border-b-2 border-[rgba(0,0,0,0.88)] my-2 mb-1 text-[18px] font-semibold leading-[32px]">
          在校经历
        </div>
        <div className="flex flex-col justify-center items-start w-full max-w-full my-2.5">
          <div className="flex justify-between items-center w-full max-w-full text-black/88">
            <div className="text-[18px] font-bold leading-[32px]">
              上海逻讯信息科技有限公司-兰州分公司
            </div>
          </div>
          <div className="flex justify-start items-center gap-[20px] w-full max-w-full text-black/88 text-[16px] font-bold leading-[32px] relative">
            <div>前端开发工程师</div>
            <div>研发中心</div>
          </div>
          <ul className="list-disc list-outside pl-[20px]">
            <li>主要负责兰州地区的项目开发，进度汇报与上海总公司后端开发工程师对接</li>
          </ul>
        </div>
      </div>
      <div className="w-full max-w-full mx-auto">
        <div className="text-[rgba(0,0,0,0.88)] text-start border-b-2 border-[rgba(0,0,0,0.88)] my-2 mb-1 text-[18px] font-semibold leading-[32px]">
          致谢
        </div>
        <div>感谢您花时间阅读我的简历，期待有机会能和您共事。</div>
      </div>
    </div>
  );
}

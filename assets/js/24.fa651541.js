(window.webpackJsonp=window.webpackJsonp||[]).push([[24],{391:function(v,_,e){"use strict";e.r(_);var t=e(45),a=Object(t.a)({},(function(){var v=this,_=v.$createElement,e=v._self._c||_;return e("ContentSlotsDistributor",{attrs:{"slot-key":v.$parent.slotKey}},[e("h1",{attrs:{id:"从输入-url-开始"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#从输入-url-开始"}},[v._v("#")]),v._v(" 从输入 URL 开始")]),v._v(" "),e("h2",{attrs:{id:"输入网址并解析"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#输入网址并解析"}},[v._v("#")]),v._v(" 输入网址并解析")]),v._v(" "),e("h3",{attrs:{id:"url-的组成"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#url-的组成"}},[v._v("#")]),v._v(" URL 的组成")]),v._v(" "),e("p",[v._v("URL 主要由协议、主机、端口、路径、查询参数、锚点 6 部分组成。")]),v._v(" "),e("p",[v._v("浏览器发送请求前，根据请求头的"),e("code",[v._v("expires")]),v._v("和"),e("code",[v._v("cache-control")]),v._v("判断是否命中（包括是否过期）强缓存策略，如果命中，直接从缓存获取资源，并不会发送请求。如果没有命中，则进入下一步。")]),v._v(" "),e("p",[v._v("没有命中强缓存规则，浏览器会发送请求，根据请求头的"),e("code",[v._v("If-Modified-Since")]),v._v("和"),e("code",[v._v("If-None-Match")]),v._v("判断是否命中协商缓存，如果命中，直接从缓存获取资源。如果没有命中，则进入下一步。")]),v._v(" "),e("p",[v._v("如果前两步都没有命中，则直接从服务端获取资源。")]),v._v(" "),e("h3",{attrs:{id:"浏览器缓存"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#浏览器缓存"}},[v._v("#")]),v._v(" 浏览器缓存")]),v._v(" "),e("p",[e("strong",[v._v("强缓存")])]),v._v(" "),e("p",[v._v("强制缓存就是向浏览器缓存查找该请求结果，并根据该结果的缓存规则来决定是否使用该缓存结果的过程。强缓存又分为两种"),e("code",[v._v("Expires")]),v._v("和"),e("code",[v._v("Cache-Control")]),v._v("。")]),v._v(" "),e("img",{attrs:{src:v.$withBase("/Browser/strong-caching.jpg"),alt:"strong-caching"}}),v._v(" "),e("p",[v._v("Expires")]),v._v(" "),e("ul",[e("li",[v._v("版本：HTTP/1.0")]),v._v(" "),e("li",[v._v("来源：存在于服务端返回的响应头中")]),v._v(" "),e("li",[v._v("语法：Expires: Wed, 22 Nov 2019 08:41:00 GMT")]),v._v(" "),e("li",[v._v("缺点：服务器的时间和浏览器的时间可能并不一致导致失效")])]),v._v(" "),e("p",[v._v("Cache-Control")]),v._v(" "),e("ul",[e("li",[v._v("版本：HTTP/1.1")]),v._v(" "),e("li",[v._v("来源：响应头和请求头")]),v._v(" "),e("li",[v._v("语法：Cache-Control: max-age=3600")]),v._v(" "),e("li",[v._v("缺点：时间最终还是会失效")])]),v._v(" "),e("p",[v._v("除了以上字段，还有部分字段：")]),v._v(" "),e("p",[v._v("请求头：")]),v._v(" "),e("table",[e("thead",[e("tr",[e("th",[v._v("字段名称")]),v._v(" "),e("th",[v._v("说明")])])]),v._v(" "),e("tbody",[e("tr",[e("td",[v._v("no-cache")]),v._v(" "),e("td",[v._v("告知（代理）服务器不直接使用缓存，要求向原服务器发起请求")])]),v._v(" "),e("tr",[e("td",[v._v("no-store")]),v._v(" "),e("td",[v._v("所有内容都不会被保存到缓存或 Internet 临时文件中")])]),v._v(" "),e("tr",[e("td",[v._v("max-age=delta-seconds")]),v._v(" "),e("td",[v._v("告知服务器客户端希望接收一个存在时间不大于 delta-secconds 秒的资源")])]),v._v(" "),e("tr",[e("td",[v._v("max-stale[=delta-seconds]")]),v._v(" "),e("td",[v._v("告知（代理）服务器客户端愿意接收一个超过缓存时间的资源，若有定义 delta-seconds 则为 delta-seconds 秒，若没有则为任意超出时间")])]),v._v(" "),e("tr",[e("td",[v._v("min-fresh=delta-seconds")]),v._v(" "),e("td",[v._v("告知（代理）服务器客户端希望接收一个在小于 delta-seconds 秒内被更新过的资源")])]),v._v(" "),e("tr",[e("td",[v._v("no-transform")]),v._v(" "),e("td",[v._v("告知（代理）服务器客户端希望获取实体数据没有被转换（比如压缩）过的资源")])]),v._v(" "),e("tr",[e("td",[v._v("noly-if-cached")]),v._v(" "),e("td",[v._v("告知（代理）服务器客户端希望获取缓存的内容（若有），而不用向原服务器发去请求")])]),v._v(" "),e("tr",[e("td",[v._v("cache-extension")]),v._v(" "),e("td",[v._v("自定义扩展值，若服务器不识别该值将被忽略掉")])])])]),v._v(" "),e("p",[v._v("响应头：")]),v._v(" "),e("table",[e("thead",[e("tr",[e("th",[v._v("字段名称")]),v._v(" "),e("th",[v._v("说明")])])]),v._v(" "),e("tbody",[e("tr",[e("td",[v._v("public")]),v._v(" "),e("td",[v._v("表明任何情况下都得缓存该资源（即使是需要 HTTP 认证的资源）")])]),v._v(" "),e("tr",[e("td",[v._v("Private=[field-name]")]),v._v(" "),e("td",[v._v("表明返回报文中全部或部分（若指定了 field-name 则为 field-name 的字段数据）仅开放给某些用户（服务器指定的share-user，如代理服务器）做缓存使用，其他用户则不能缓存这些数据")])]),v._v(" "),e("tr",[e("td",[v._v("no-cache")]),v._v(" "),e("td",[v._v("不直接使用缓存，要求向服务器发起（新鲜度校验）请求")])]),v._v(" "),e("tr",[e("td",[v._v("no-store")]),v._v(" "),e("td",[v._v("所以内容都不会被保存到缓存或 Internet 临时文件中")])]),v._v(" "),e("tr",[e("td",[v._v("no-transform")]),v._v(" "),e("td",[v._v("告知客户端缓存文件时不得对实体数据做任何改变")])]),v._v(" "),e("tr",[e("td",[v._v("noly-if-cached")]),v._v(" "),e("td",[v._v("告知（代理）服务器客户端希望获取缓存的内容（若有），而不用向原服务器发去请求")])]),v._v(" "),e("tr",[e("td",[v._v("must-revalidate")]),v._v(" "),e("td",[v._v("当前资源若为过期，则直接使用，若过期，则必须向原服务器发送验证请求")])]),v._v(" "),e("tr",[e("td",[v._v("proxy-revalidate")]),v._v(" "),e("td",[v._v("与must-revalidate类似，但仅能应用于共享缓存（如代理）")])]),v._v(" "),e("tr",[e("td",[v._v("max-age=delta-seconds")]),v._v(" "),e("td",[v._v("告知客户端该资源在 delta-seconds 秒内是新鲜的，无需向服务器发请求")])]),v._v(" "),e("tr",[e("td",[v._v("s-maxage=delta-seconds")]),v._v(" "),e("td",[v._v("同 max-age，但仅能应用于共享缓存（如代理）")])]),v._v(" "),e("tr",[e("td",[v._v("cache-extension")]),v._v(" "),e("td",[v._v("自定义扩展值，若服务器不识别该值将被忽略掉")])])])]),v._v(" "),e("p",[e("strong",[v._v("协商缓存")])]),v._v(" "),e("p",[v._v("协商缓存就是强制缓存失效后，浏览器携带缓存标识向服务器发起请求，由服务器根据缓存标识决定是否使用缓存的过程。如果命中标识，则返回 304 状态码并带上新的"),e("code",[v._v("response header")]),v._v("通知浏览器从缓存中读取资源。")]),v._v(" "),e("img",{attrs:{src:v.$withBase("/Browser/negotiation-caching.jpg"),alt:"negotiation-caching"}}),v._v(" "),e("p",[v._v("Last-Modified（响应头）、If-Modified-Since（请求头）")]),v._v(" "),e("p",[v._v("在浏览器第一次给服务器发送请求后，服务器会在响应头中加上这个字段。 浏览器接收到后，如果再次请求，会在请求头中携带"),e("code",[v._v("If-Modified-Since")]),v._v("字段，这个字段的值也就是服务器传来的最后修改时间。 服务器拿到请求头中的"),e("code",[v._v("If-Modified-Since")]),v._v("的字段后，其实会和这个服务器中该资源的最后修改时间"),e("code",[v._v("Last-Modified")]),v._v("对比，询问服务器在该日期后资源是否有更新，有更新的话就会将新的资源发送回来。")]),v._v(" "),e("p",[v._v("但是如果在本地打开缓存文件，就会造成 "),e("code",[v._v("Last-Modified")]),v._v(" 被修改，所以在 "),e("code",[v._v("HTTP / 1.1")]),v._v(" 出现了 "),e("code",[v._v("ETag")]),v._v("。")]),v._v(" "),e("p",[v._v("ETag（响应头）、If-None-Match（请求头）")]),v._v(" "),e("p",[e("code",[v._v("ETag")]),v._v("是服务器根据当前文件的内容，给文件生成的唯一标识，只要里面的内容有改动，这个值就会变。服务器通过响应头把这个值给浏览器。 浏览器接收到"),e("code",[v._v("ETag")]),v._v("的值，会在下次请求时，将这个值作为"),e("code",[v._v("If-None-Match")]),v._v("这个字段的内容，并放到请求头中，然后发给服务器。")]),v._v(" "),e("blockquote",[e("p",[v._v("如果两种方式都支持，服务器将优先考虑 ETag")])]),v._v(" "),e("p",[e("strong",[v._v("存储位置")])]),v._v(" "),e("ul",[e("li",[v._v("Service Worker")])]),v._v(" "),e("p",[e("code",[v._v("Service Worker")]),v._v(" 是运行在浏览器背后的独立线程，一般可以用来实现缓存功能。使用 "),e("code",[v._v("Service Worker")]),v._v("的话，传输协议必须为 "),e("code",[v._v("HTTPS")]),v._v("。因为 "),e("code",[v._v("Service Worker")]),v._v(" 中涉及到请求拦截，所以必须使用 "),e("code",[v._v("HTTPS")]),v._v(" 协议来保障安全。"),e("code",[v._v("Service Worker")]),v._v(" 的缓存与浏览器其他内建的缓存机制不同，它可以让我们自由控制缓存哪些文件、如何匹配缓存、如何读取缓存，并且缓存是持续性的。")]),v._v(" "),e("p",[e("code",[v._v("Service Worker")]),v._v(" 实现缓存功能一般分为三个步骤：首先需要先注册 "),e("code",[v._v("Service Worker")]),v._v("，然后监听到 "),e("code",[v._v("install")]),v._v(" 事件以后就可以缓存需要的文件，那么在下次用户访问的时候就可以通过拦截请求的方式查询是否存在缓存，存在缓存的话就可以直接读取缓存文件，否则就去请求数据。")]),v._v(" "),e("p",[v._v("当 "),e("code",[v._v("Service Worker")]),v._v(" 没有命中缓存的时候，我们需要去调用 "),e("code",[v._v("fetch")]),v._v(" 函数获取数据。也就是说，如果我们没有在 "),e("code",[v._v("Service Worker")]),v._v(" 命中缓存的话，会根据缓存查找优先级去查找数据。但是不管我们是从 "),e("code",[v._v("Memory Cache")]),v._v(" 中还是从网络请求中获取的数据，浏览器都会显示我们是从 "),e("code",[v._v("Service Worker")]),v._v("中获取的内容。")]),v._v(" "),e("ul",[e("li",[v._v("Memory Cache")])]),v._v(" "),e("p",[e("code",[v._v("Memory Cache")]),v._v(" 也就是内存中的缓存，主要包含的是当前中页面中已经抓取到的资源,例如页面上已经下载的样式、脚本、图片等。读取内存中的数据肯定比磁盘快,内存缓存虽然读取高效，可是缓存持续性很短，会随着进程的释放而释放。 一旦我们关闭Tab页面，内存中的缓存也就被释放了。")]),v._v(" "),e("ul",[e("li",[v._v("Disk Cache")])]),v._v(" "),e("p",[e("code",[v._v("Disk Cache")]),v._v(" 也就是存储在硬盘中的缓存，读取速度慢点，但是什么都能存储到磁盘中，比之 "),e("code",[v._v("Memory Cache")]),v._v(" 胜在容量和存储时效性上。")]),v._v(" "),e("ul",[e("li",[v._v("Push Cache")])]),v._v(" "),e("p",[e("code",[v._v("Push Cache")]),v._v("（推送缓存）是 "),e("code",[v._v("HTTP/2")]),v._v(" 中的内容，当以上三种缓存都没有命中时，它才会被使用。它只在会话（Session）中存在，一旦会话结束就被释放，并且缓存时间也很短暂，在Chrome浏览器中只有5分钟左右，同时它也并非严格执行 HTTP 头中的缓存指令。")]),v._v(" "),e("h3",{attrs:{id:"dns-域名解析"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#dns-域名解析"}},[v._v("#")]),v._v(" DNS 域名解析")]),v._v(" "),e("p",[v._v("在发起 http 请求之前，浏览器首先要去获得我们想访问网页的 IP 地址，浏览器会发送一个 UDP 包给 DNS 域名解析服务器。")]),v._v(" "),e("img",{attrs:{src:v.$withBase("/Browser/DNS-resolution-process.jpg"),alt:"DNS-resolution-process"}}),v._v(" "),e("h2",{attrs:{id:"tcp-三次握手"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#tcp-三次握手"}},[v._v("#")]),v._v(" TCP 三次握手")]),v._v(" "),e("h3",{attrs:{id:"三次握手过程"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#三次握手过程"}},[v._v("#")]),v._v(" 三次握手过程")]),v._v(" "),e("p",[v._v("第一次握手：主机 A 发送位码为"),e("code",[v._v("SYN＝1")]),v._v("，随机产生"),e("code",[v._v("Seq number=1234567")]),v._v("的数据包到服务器，主机 B 由"),e("code",[v._v("SYN=1")]),v._v("知道，A要求建立联机；（第一次握手，由浏览器发起，告诉服务器我要发送请求了）")]),v._v(" "),e("p",[v._v("第二次握手：主机 B 收到请求后要确认联机信息，向 A 发送"),e("code",[v._v("ack number=(主机A的seq+1)")]),v._v("，"),e("code",[v._v("SYN=1，ACK=1234567 + 1")]),v._v("，随机产生"),e("code",[v._v("Seq=7654321")]),v._v("的包；（第二次握手，由服务器发起，告诉浏览器我准备接受了，你赶紧发送吧）")]),v._v(" "),e("p",[v._v("第三次握手：主机 A 收到后检查"),e("code",[v._v("ack number")]),v._v("是否正确，即第一次发送的"),e("code",[v._v("seq number+1")]),v._v("，以及位码"),e("code",[v._v("SYN")]),v._v("是否为1，若正确，主机 A 会再发送"),e("code",[v._v("ack number=(主机B的seq+1)")]),v._v("，"),e("code",[v._v("ack=7654321 + 1")]),v._v("，主机 B 收到后确认"),e("code",[v._v("Seq")]),v._v("值与"),e("code",[v._v("ACK=7654321+ 1")]),v._v("则连接建立成功；（第三次握手，由浏览器发送，告诉服务器，我马上就发了，准备接受吧）")]),v._v(" "),e("p",[e("strong",[v._v("SYN 泛洪 DDoS 攻击")])]),v._v(" "),e("p",[v._v("服务器端的资源分配是在二次握手时分配的，而客户端的资源是在完成三次握手时分配的，所以服务器容易受到 SYN 泛洪攻击。SYN 攻击就是客户端在短时间内伪造大量不存在的 IP 地址，并向服务器端不断地发送 SYN 包，服务器端则回复确认包，并等待客户端确认，由于源地址不存在，因此服务器端需要不断重发直至超时，这些伪造的 SYN 包将长时间占用未连接队列，导致正常的 SYN 请求因为队列满而被丢弃，从而引起网络拥塞甚至系统瘫痪。SYN 攻击是一种典型的 DoS/DDoS 攻击。")]),v._v(" "),e("p",[v._v("常见的防御 SYN 攻击的方法有如下几种：")]),v._v(" "),e("ul",[e("li",[v._v("缩短超时（SYN Timeout）时间；")]),v._v(" "),e("li",[v._v("增加最大半连接数；")]),v._v(" "),e("li",[v._v("过滤网关防护；")]),v._v(" "),e("li",[v._v("SYN cookies技术。")])]),v._v(" "),e("h2",{attrs:{id:"http-请求"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#http-请求"}},[v._v("#")]),v._v(" HTTP 请求")]),v._v(" "),e("h3",{attrs:{id:"http-发展历史"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#http-发展历史"}},[v._v("#")]),v._v(" HTTP 发展历史")]),v._v(" "),e("p",[v._v("HTTP/0.9")]),v._v(" "),e("ul",[e("li",[v._v("只有一个命令 GET")]),v._v(" "),e("li",[v._v("响应类型: 仅超文本")]),v._v(" "),e("li",[v._v("没有 header 等描述数据的信息")]),v._v(" "),e("li",[v._v("服务器发送完毕，就关闭 TCP 连接")])]),v._v(" "),e("p",[v._v("HTTP/1.0")]),v._v(" "),e("ul",[e("li",[v._v("增加了很多命令（post HESD）")]),v._v(" "),e("li",[v._v("增加"),e("code",[v._v("status code")]),v._v(" 和 "),e("code",[v._v("header")])]),v._v(" "),e("li",[v._v("多字符集支持、多部分发送、权限、缓存等")]),v._v(" "),e("li",[v._v("响应：不再只限于超文本（Content-Type 头部提供了传输 HTML 之外文件的能力如脚本、样式或媒体文件）")])]),v._v(" "),e("p",[v._v("HTTP/1.1")]),v._v(" "),e("ul",[e("li",[v._v("持久连接。TCP 三次握手会在任何连接被建立之前发生一次。最终，当发送了所有数据之后，服务器发送一个消息，表示不会再有更多数据向客户端发送了；则客户端才会关闭连接（断开 TCP 连接）")]),v._v(" "),e("li",[v._v("支持的方法: "),e("code",[v._v("GET")]),v._v("、 "),e("code",[v._v("HEAD")]),v._v("、 "),e("code",[v._v("POST")]),v._v("、 "),e("code",[v._v("PUT")]),v._v("、"),e("code",[v._v("DELETE")]),v._v("、 "),e("code",[v._v("TRACE")]),v._v("、 "),e("code",[v._v("OPTIONS")]),v._v(" "),e("ul",[e("li",[v._v("进行了重大的性能优化和特性增强，分块传输、压缩\\解压、内容缓存协商、虚拟主机（有单个IP地址的主机具有多个域名）、更快的响应，以及通过增加缓存节省了更多的带宽")])])])]),v._v(" "),e("p",[v._v("HTTP2")]),v._v(" "),e("ul",[e("li",[v._v("所有数据以二进制传输。HTTP1.x 是基于文本的，无法保证健壮性，HTTP2.0 绝对使用新的二进制格式，方便且健壮")]),v._v(" "),e("li",[v._v("同一个连接里面发送多个请求不再需要按照顺序来")]),v._v(" "),e("li",[v._v("头信息压缩以及推送等提高效率的功能")])]),v._v(" "),e("p",[v._v("HTTP3")]),v._v(" "),e("ul",[e("li",[v._v("QUIC “快速 UDP 互联网连接”（Quick UDP Internet Connections）")])]),v._v(" "),e("p",[v._v("HTTP2 虽然大幅提升了 HTTP 的性能，但仍存在以下问题：")]),v._v(" "),e("ul",[e("li",[v._v("有序字节流引出的"),e("strong",[v._v("队头阻塞")]),v._v("（Head-of-line blocking），使得 HTTP2 的多路复用能力大打折扣；")]),v._v(" "),e("li",[e("strong",[v._v("TCP 与 TLS 叠加了握手时延")]),v._v("，建立连接时长还有 1 倍的下降空间；")]),v._v(" "),e("li",[v._v("基于 TCP 四元组确定一个连接，这种诞生于有线网络的设计，并不适合移动状态下的无线网络，这意味着 "),e("strong",[v._v("IP 地址的频繁变动会导致 TCP 连接、TLS 会话反复握手")]),v._v("，成本高昂。")])]),v._v(" "),e("p",[v._v("HTTP3 的主要改进在传输层上。传输层不会再有前面提到的那些繁重的 TCP 连接了。现在，一切都会走 UDP。")]),v._v(" "),e("ul",[e("li",[v._v("HTTP3基于 UDP 协议重新定义了连接，在 QUIC 层实现了无序、并发字节流的传输，解决了队头阻塞问题（包括基于 QPACK 解决动态表的队头阻塞）；")]),v._v(" "),e("li",[v._v("HTTP3 重新定义了 TLS 协议加密 QUIC 头部的方式，既提高了网络攻击成本，又降低了建立连接的速度（仅需 1 个 RTT 就可以同时完成建链与密钥协商）；")]),v._v(" "),e("li",[v._v("HTTP3 将 Packet、QUIC Frame、HTTP3 Frame 分离，实现了连接迁移功能，降低了 5G 环境下高速移动设备的连接维护成本。")])]),v._v(" "),e("h3",{attrs:{id:"http-协议特点"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#http-协议特点"}},[v._v("#")]),v._v(" HTTP 协议特点")]),v._v(" "),e("ul",[e("li",[v._v("支持客户/服务器模式。")]),v._v(" "),e("li",[v._v("简单快速客户向服务器请求服务时，只需传送请求方法和路径。请求方法常用的有 GET、HEAD、POST。每种方法规定了客户与服务器联系的类型不同。由于 HTTP协议简单，使得HTTP服务器的程序规模小，因而通信速度很快。")]),v._v(" "),e("li",[v._v("灵活：HTTP允许传输任意类型的数据对象。正在传输的类型由Content-Type（Content-Type是HTTP包中用来表示内容类型的标识）加以标记。")]),v._v(" "),e("li",[v._v("无连接：无连接的含义是限制每次连接只处理一个请求。服务器处理完客户的请求，并收到客户的应答后，即断开连接。采用这种方式可以节省传输时间。")]),v._v(" "),e("li",[v._v("无状态：HTTP协议是无状态协议。无状态是指协议对于事务处理没有记忆能力。缺少状态意味着如果后续处理需要前面的信息，则它必须重传，这样可能导致每次连接传送的数据量增大。另一方面，在服务器不需要先前信息时它的应答就较快。")])]),v._v(" "),e("h3",{attrs:{id:"https"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#https"}},[v._v("#")]),v._v(" HTTPS")]),v._v(" "),e("p",[v._v("在HTTP的基础上再加一层 TLS（传输层安全性协议）或者 SSL（安全套接层），就构成了 HTTPS 协议。HTTPS 默认工作在 TCP 协议 443 端口，它的工作流程一般如以下方式：")]),v._v(" "),e("ul",[e("li",[v._v("TCP 三次握手")]),v._v(" "),e("li",[v._v("客户端验证服务器数字证书")]),v._v(" "),e("li",[v._v("DH 算法协商对称加密算法的密钥、hash 算法的密钥")]),v._v(" "),e("li",[v._v("SSL 安全加密隧道协商完成")]),v._v(" "),e("li",[v._v("网页以加密的方式传输，用协商的对称加密算法和密钥加密，保证数据机密性；用协商的 hash 算法和密钥进行数据完整性保护，保证数据不被篡改。")])]),v._v(" "),e("p",[v._v("TLS 握手过程：")]),v._v(" "),e("ol",[e("li",[v._v("客户端发送一个"),e("code",[v._v("ClientHello")]),v._v("消息到服务器端，消息中同时包含了它的 Transport Layer Security (TLS) 版本，可用的加密算法和压缩算法")]),v._v(" "),e("li",[v._v("服务器端向客户端返回一个"),e("code",[v._v("ServerHello")]),v._v("消息，消息中包含了服务器端的 TLS 版本，服务器所选择的加密和压缩算法，以及数字证书认证机构（Certificate Authority，缩写 CA）签发的服务器公开证书，证书中包含了公钥。客户端会使用这个公钥加密接下来的握手过程，直到协商生成一个新的对称密钥")]),v._v(" "),e("li",[v._v("客户端根据自己的信任 CA 列表，验证服务器端的证书是否可信。如果认为可信，客户端会生成一串伪随机数，使用服务器的公钥加密它。这串随机数会被用于生成新的对称密钥")]),v._v(" "),e("li",[v._v("服务器端使用自己的私钥解密上面提到的随机数，然后使用这串随机数生成自己的对称主密钥")]),v._v(" "),e("li",[v._v("客户端发送一个"),e("code",[v._v("Finished")]),v._v("消息给服务器端，使用对称密钥加密这次通讯的一个散列值")]),v._v(" "),e("li",[v._v("服务器端生成自己的 hash 值，然后解密客户端发送来的信息，检查这两个值是否对应。如果对应，就向客户端发送一个"),e("code",[v._v("Finished")]),v._v("消息，也使用协商好的对称密钥加密")]),v._v(" "),e("li",[v._v("从现在开始，接下来整个 TLS 会话都使用对称秘钥进行加密，传输应用层（HTTP）内容")])]),v._v(" "),e("p",[v._v("TLS 握手的关键在于利用通信双发生成的随机字符串和服务端的证书公钥生成一个双方经过协商后的对称密钥，这样通信双方就可以使用这个对称密钥在后续的数据传输中加密消息数据，防止中间人的监听和攻击，保证通讯安全。")]),v._v(" "),e("h2",{attrs:{id:"服务器处理请求并返回-http-报文"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#服务器处理请求并返回-http-报文"}},[v._v("#")]),v._v(" 服务器处理请求并返回 HTTP 报文")]),v._v(" "),e("p",[v._v("每台服务器上都会安装处理请求的应用 Web Server。常见的 Web Server 产品有 "),e("code",[v._v("apache")]),v._v("、"),e("code",[v._v("nginx")]),v._v("、"),e("code",[v._v("IIS")]),v._v(" 和 "),e("code",[v._v("Lighttpd")]),v._v(" 等。")]),v._v(" "),e("p",[v._v("HTTP 请求一般可以分为两类，静态资源 和 动态资源。")]),v._v(" "),e("p",[v._v("请求访问静态资源，这个就直接根据 url 地址去服务器里找就好了。")]),v._v(" "),e("p",[v._v("请求动态资源的话，就需要 web server 把不同请求，委托给服务器上处理相应请求的程序进行处理（例如 CGI 脚本，JSP 脚本，servlets，ASP 脚本，服务器端 JavaScript，或者一些其它的服务器端技术等），然后返回后台程序处理产生的结果作为响应，发送到客户端。")]),v._v(" "),e("p",[v._v("服务器在处理请求的时候主要有三种方式：")]),v._v(" "),e("ul",[e("li",[v._v("第一种：是用一个线程来处理所有的请求，并且同时只能处理一个请求，但是这样的话性能是非常的低的。")]),v._v(" "),e("li",[v._v("第二种：是每一个请求都给他分配一个线程，但是当连接和请求比较多的时候就会导致服务器的 cpu 不堪重负。")]),v._v(" "),e("li",[v._v("第三种：就是采用复用 I/O 的方式来处理，例如通过 epoll 方式监视所有连接，当连接状态发生改变的时候才去分配空间进行处理。")])]),v._v(" "),e("h2",{attrs:{id:"浏览器渲染页面"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#浏览器渲染页面"}},[v._v("#")]),v._v(" 浏览器渲染页面")]),v._v(" "),e("h3",{attrs:{id:"浏览器的进程和线程"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#浏览器的进程和线程"}},[v._v("#")]),v._v(" 浏览器的进程和线程")]),v._v(" "),e("p",[v._v("浏览器主要进程分为：")]),v._v(" "),e("ul",[e("li",[v._v("浏览器（Browser）主进程：只有一个，主要控制页面的创建、销毁等。")]),v._v(" "),e("li",[v._v("第三方插件进程：每一种类型的插件对应一个进程，仅当使用该插件时才创建。")]),v._v(" "),e("li",[v._v("GPU 进程：只有一个，主要用于 3D 绘制等。")]),v._v(" "),e("li",[v._v("浏览器渲染进程（浏览器内核）：每个 Tab 页对应一个进程，互不影响。")]),v._v(" "),e("li",[v._v("网络进程：主要负责页面的网络资源加载，之前作为一个模块运行在浏览器主进程中，后被独立出来成为单独进程。")])]),v._v(" "),e("p",[v._v("其中，渲染进程又分为以下线程：")]),v._v(" "),e("ul",[e("li",[e("p",[v._v("GUI 渲染线程：负责渲染浏览器界面，解析 HTML、CSS，构建 DOM 树和 RenderObject 树，布局和绘制等，当界面需要重绘（Repaint）或由于某种操作引发回流（Reflow）时，该线程就会执行。")]),v._v(" "),e("blockquote",[e("p",[v._v("GUI 渲染线程与 JS 引擎线程是互斥的（JS 可以操作 DOM），当 JS 引擎执行时，GUI 线程会被挂起，GUI 更新会保存在一个队列中等到 JS 引擎空闲时立即执行。")])])]),v._v(" "),e("li",[e("p",[v._v("JS 引擎线程：也称为 JS 内核（例如 V8 引擎），负责处理 JS 脚本程序。运行代码。JS 引擎一直等待着任务队列中任务的到来，然后加以处理，一个 Tab 页中无论什么时候都只有一个 JS 线程在运行 JS 程序。")]),v._v(" "),e("blockquote",[e("p",[v._v("同样注意，GUI 线程与 JS 线程互斥，如果 JS 执行时间过长，就会造成页面渲染阻塞。")])])]),v._v(" "),e("li",[e("p",[v._v("事件触发线程：归属于浏览器而不是 JS 引擎，用来控制事件循环。当 JS 引擎执行代码块如 setTimeout 时（也可来自浏览器内核的其他线程，如鼠标点击、Ajax 异步请求等），会将对应任务添加到事件线程中，当对应的事件符合触发条件被触发时，该线程会把事件添加到待处理队列的队尾，等待 JS 引擎的处理。")]),v._v(" "),e("blockquote",[e("p",[v._v("由于 JS 的单线程关系，所以这些待处理队列中的事件都得排队等待 JS 引擎处理 （当 JS 引擎空闲时，才会去执行）")])])]),v._v(" "),e("li",[e("p",[v._v("定时器触发线程：传说中的 setTimeout 与 setInterval 所在的线程，浏览器定时计数器并不是由 JS 引擎计数的，因为JS 引擎是单线程，如果处于阻塞线程状态就会影响计时的准确性，因此通过单独线程来计时并触发定时器（计时完毕后，添加到任务队列中，等待 JS 引擎空闲后执行）")]),v._v(" "),e("blockquote",[e("p",[v._v("W3C 在 HTML 标准中规定，规定要求 setTimeout 中低于 4ms 的时间间隔算为 4ms。")])])]),v._v(" "),e("li",[e("p",[v._v("异步 HTTP 请求线程：XMLHttpRequest 在连接后是通过浏览器新开的一个线程请求。当检测到状态变更时，如果设置有回调函数，异步线程就产生状态变更事件，将这个回调放入任务队列中，再由 JS 引擎执行。")])]),v._v(" "),e("li",[e("p",[v._v("合成线程：将图层分成图块，并在光栅化线程池中将图块转换成位图。")])]),v._v(" "),e("li",[e("p",[v._v("I/O 线程：用来和其他进程进行通信，例如： 网络进程下载完成以后就会通过 IPC 将信息发送给 IO 线程。当用户点击页面按钮，浏览器主进程就会把这个信息通过 IPC 发送给 IO 线程。IO 线程会将这个信息包装成任务发送给任务队列。")])])]),v._v(" "),e("h3",{attrs:{id:"浏览器渲染过程"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#浏览器渲染过程"}},[v._v("#")]),v._v(" 浏览器渲染过程")]),v._v(" "),e("ul",[e("li",[v._v("DOM：构建 DOM 树，将 HTML 解析为 DOM 树。当解析器发现非阻塞资源，例如一张图片，浏览器会请求这些资源并且继续解析。当遇到一个 CSS 文件时，解析也可以继续进行，但是对于 "),e("code",[v._v("<script>")]),v._v(" 标签（特别是没有"),e("code",[v._v("async")]),v._v("或者"),e("code",[v._v("defer")]),v._v("属性时）会阻塞渲染并停止 HTML 的解析。尽管浏览器的预加载扫描器加速了这个过程，但过多的脚本仍然是一个重要的瓶颈。")]),v._v(" "),e("li",[v._v("Style：构建 CSSOM 树，将 CSS 转换为浏览器能够理解的结构 styleSheets。")]),v._v(" "),e("li",[v._v("Layout：构建布局树，布局树会移除 DOM 树中不可见的部分，并计算可见部分的几何位置。")]),v._v(" "),e("li",[v._v("Layer：构建涂层树，将页面划分为多个图层，一些层叠上下文 CSS 属性（比如 z-index、opacity、position）、“由于显示不全被裁减的内容”等会使 DOM 元素形成独立的图层。")]),v._v(" "),e("li",[v._v("Paint：为每个图层生成包含“绘制信息”的绘制列表，将绘制列表提交给渲染进程的合成线程用于绘制。")]),v._v(" "),e("li",[v._v("Raster：栅格化，合成线程会将图层划分为图块（tile），然后按照视口附近的图块来优先生成位图，实际生成位图的操作是由栅格化来执行的。所谓栅格化，是指将图块转换为位图。而图块是栅格化执行的最小单位。渲染进程维护了一个栅格化的线程池，所有的图块栅格化都是在线程池内执行的。通常，栅格化过程都会使用 GPU 来加速生成，使用 GPU 生成位图的过程叫快速栅格化，或者 GPU 栅格化，生成的位图被保存在 GPU 内存中。")])]),v._v(" "),e("p",[v._v("一旦所有图块都被栅格化，合成线程就会生成一个绘制图块的命令"),e("code",[v._v("DrawQuad")]),v._v("，然后将该命令提交给浏览器进程。浏览器进程里面有一个叫"),e("code",[v._v("viz")]),v._v("的组件，用来接收合成线程发过来的"),e("code",[v._v("DrawQuad")]),v._v("命令，然后根据"),e("code",[v._v("DrawQuad")]),v._v("命令，将其页面内容绘制到内存中，最后再将内存显示在屏幕上。到这里，经过这一系列的阶段，编写好的 HTML、CSS、JavaScript 等文件，经过浏览器就会显示出漂亮的页面了。")]),v._v(" "),e("h2",{attrs:{id:"tcp-四次挥手"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#tcp-四次挥手"}},[v._v("#")]),v._v(" TCP 四次挥手")]),v._v(" "),e("h3",{attrs:{id:"tcp-四次挥手过程"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#tcp-四次挥手过程"}},[v._v("#")]),v._v(" TCP 四次挥手过程")]),v._v(" "),e("p",[v._v("刚开始双方都处于established状态，假如是客户端先发起关闭请求：")]),v._v(" "),e("p",[v._v("第一次挥手：客户端发送一个 FIN 报文，报文中会指定一个序列号。此时客户端处于 FIN_WAIT1 状态；")]),v._v(" "),e("p",[v._v("第二次挥手：服务端收到 FIN 之后，会发送 ACK 报文，且把客户端的序列号值 +1 作为 ACK 报文的序列号值，表明已经收到客户端的报文了，此时服务端处于 CLOSE_WAIT 状态；")]),v._v(" "),e("p",[v._v("第三次挥手：如果服务端也想断开连接了，和客户端的第一次挥手一样，发送 FIN 报文，且指定一个序列号。此时服务端处于 LAST_ACK 的状态；")]),v._v(" "),e("p",[v._v("第四次挥手：客户端收到 FIN 之后，一样发送一个 ACK 报文作为应答，且把服务端的序列号值 +1 作为自己 ACK 报文的序列号值，此时客户端处于 TIME_WAIT 状态。需要过一阵子（一般是一个 RTT）以确保服务端收到自己的 ACK 报文之后才会进入 CLOSED 状态；")]),v._v(" "),e("p",[v._v("服务端收到 ACK 报文之后，就处于关闭连接了，处于 CLOSED 状态。")])])}),[],!1,null,null,null);_.default=a.exports}}]);
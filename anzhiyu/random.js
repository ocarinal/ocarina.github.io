var posts=["2024/03/16/ATRI -My Dear Moments-/","2024/03/16/Harem：调教凌辱帝国公主/","2024/03/16/COSPLAY LOVE! ：Enchanted Princess/","2024/03/16/re：D Cherish！：血紅珍寶/","2024/03/17/【日式arpg】暗影之狼/","2024/03/17/【日式slg】微睡み-少女睡眠姦DL正式版/","2024/03/16/保健室的老师与肥皂泡中毒的助手/","2024/03/17/傲慢的怪兽公主与名侦探使魔/","2024/03/16/天津罪：超能力鄉毋寧進城/","2024/03/17/兽娘道 GirlishSquare2/","2024/03/17/巨乳幽灵尽情抚慰苦逼打工人的h活 精翻汉化版/","2024/03/17/女子宿舍的管理员/","2024/03/17/我被巨乳鬼魂袭击了/","2024/03/16/恋语 Juliamo -amrilato lingvo/","2024/03/16/水葬銀貨のイストリア/","2024/03/16/星空列车与白的旅行/","2024/03/17/求求你！不要了！爆乳JK肉-器的呼喊/","2024/03/17/片桐同学对我很冷淡DL官中版/","2024/03/17/魔法天使精灵花fairy/"];function toRandomPost(){
    pjax.loadUrl('/'+posts[Math.floor(Math.random() * posts.length)]);
  };var friend_link_list=[];
    var refreshNum = 1;
    function friendChainRandomTransmission() {
      const randomIndex = Math.floor(Math.random() * friend_link_list.length);
      const { name, link } = friend_link_list.splice(randomIndex, 1)[0];
      Snackbar.show({
        text:
          "点击前往按钮进入随机一个友链，不保证跳转网站的安全性和可用性。本次随机到的是本站友链：「" + name + "」",
        duration: 8000,
        pos: "top-center",
        actionText: "前往",
        onActionClick: function (element) {
          element.style.opacity = 0;
          window.open(link, "_blank");
        },
      });
    }
    function addFriendLinksInFooter() {
      var footerRandomFriendsBtn = document.getElementById("footer-random-friends-btn");
      if(!footerRandomFriendsBtn) return;
      footerRandomFriendsBtn.style.opacity = "0.2";
      footerRandomFriendsBtn.style.transitionDuration = "0.3s";
      footerRandomFriendsBtn.style.transform = "rotate(" + 360 * refreshNum++ + "deg)";
      const finalLinkList = [];
  
      let count = 0;

      while (friend_link_list.length && count < 3) {
        const randomIndex = Math.floor(Math.random() * friend_link_list.length);
        const { name, link, avatar } = friend_link_list.splice(randomIndex, 1)[0];
  
        finalLinkList.push({
          name,
          link,
          avatar,
        });
        count++;
      }
  
      let html = finalLinkList
        .map(({ name, link }) => {
          const returnInfo = "<a class='footer-item' href='" + link + "' target='_blank' rel='noopener nofollow'>" + name + "</a>"
          return returnInfo;
        })
        .join("");
  
      html += "<a class='footer-item' href='/link/'>更多</a>";

      document.getElementById("friend-links-in-footer").innerHTML = html;

      setTimeout(()=>{
        footerRandomFriendsBtn.style.opacity = "1";
      }, 300)
    };
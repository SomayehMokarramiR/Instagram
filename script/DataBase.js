db = [
  {
    id: 1,
    userName: "somayeh.rostami83",
    name: "S.M.R",
    posts: [
      {
        pid: 1,
        pic: "21.jpg",
        caption:
          "  من تنهایی گریه کردم!تنهایی تلاش کردم!تنهایی به زخم هام مرهم زدم!تو اون شبهایی که صبح نمیشدن.....من تنهایی منتظر طلوع خورشید موندم!تنهایی شکست خوردمو دووباره قوی تر از جام پا شدم !میدونی چی میگم؟گاهی مستقل بودن فقط مادی نیست;اصلا اونی که از نظر روحی مستقله، قوی تره ....",
      },
      {
        pid: 2,
        pic: "17.jpg",
        caption:
          "چثدر زیبایند آنان که از ریشه زیبایند ..."
      },
      {
        pid: 3,
        pic: "44.jpg",
        caption: "توقع نداشته باش حس خوبی که به آدما میدی پس بگیری، اونا قلب تو رو ندارن... و این واقعیت تلخیه که باید قبولش کنی ....",
      },
      {
        pid: 4,
        pic: "47.jpg",
        caption:
          "اینایی که زود گریه میکنن رو اذیت نکنید.... اونا انقدر دلشون پره که اضافه اش از چشماشون زده بیرون ....",
      },
      {
        pid: 5,
        pic: "38.jpg",
        caption: "پشت هر آدم قوی ، هزار تکه شکسته هستک که یاد گرفته چطور از این تکه ها یه فرد قوی بسازه .....",
      },
      {
        pid: 6,
        pic: "32.jpg",
        caption: "باید در خودت یه گوشه ای از وجودت آدمی ساخته باشی که در روزهای سخت ، نیاز به پناه بردن به هیچ جا و هیچ کس نداشته باشی ....",
      },
      {
        pid: 7,
        pic: "35.jpg",
        caption: "حالمون خوب میشه یه روز ....ولی شاید اون روز من نباشم! اگه تو بودی جای من ، بلند بخند: ",
      },
      { pid: 8, pic: "39.jpg", caption: "به خودت افتخار کن .... چون فقط خودت می دونی چه سختی هایی رو تحمل کردی تا اینجا برسی " },
    ],
    following: [
      {
        fid: 1,
        userName: "m.bahrololom",
        name: "m.bahr",
        pic: "bahr.jpg",
        story:["1B.jpg","2B.jpg","3B.jpg","4B.jpg","5B.jpg","6B.jpg","7B.jpg"]    
      },
      {
        fid: 2,
        userName: "bahr_ac",
        name: "آکادمی کدنویسی بحر",
        pic: "academi.jpg",
        story: "acBahr.jpg",
      },
      { fid: 3, userName: "عنوان1", name: "عنوان1", pic: "22.jpg" },
      { fid: 4, userName: "عنوان2", name: " عنوان 2", pic: "12.jpg" },
      { fid: 5, userName: "عنوان3", name: "عنوان3", pic: "53.jpg" },
      { fid: 6, userName: "عنوان4", name: " عنوان 4", pic: "1.jpg" },
      { fid: 7, userName: "عنوان5", name: "عنوان5", pic: "38.jpg" },
      { fid: 8, userName: "عنوان6", name: " عنوان 6", pic: "46.jpg" },
      { fid: 9, userName: "عنوان7", name: "عنوان7", pic: "17.jpg" },
      { fid: 10, userName: "عنوان8", name: " عنوان 8", pic: "40.jpg" },
    ],

    // {id:2,userName:"m.bahrololom",name:"m.bahr",posts:[{pid:1,pic:["20.jpg"],caption:"اذاسیشبرذسرسیشنتتبستسش"}]},
    //   {id:3,userName:"bahr_ac",name:"آکادمی کدنویسی بحر"}
  },
];

function createItemes(jsonDataItem) {
  for (let i = 0; i < jsonDataItem.posts.length; i++) {
    it = document.createElement("div");
    it.className = "post";

    it.addEventListener("click", function () {
      showModal(jsonDataItem.posts[i].pid);
    });
    // alert(jsonDataItem.posts[i].pid)

    im = document.createElement("img");
    im.className = "imcls";
    //alert(jsonDataItem.posts[i].pic)
    im.src = "img/aks/" + jsonDataItem.posts[i].pic;
    it.appendChild(im);
    content.appendChild(it);
  }

  return it;
  // alert(jsonDataItem.posts[1])
  // alert(im)
  // let mtncap = document.createElement('span');
  // price.className = "price";
  // mtncap.innerHTML = jsonDataItem.caption;

  // let capHide = document.createElement('p');
  // capHide.innerHTML = jsonDataItem.caption;

  // it.appendChild(mtncap);
  // it.appendChild(capHide);

  // content.appendChild(it);
}
// modalPostContent = document.querySelectorAll("#modalPosts .container #content img");

function append(jsonData, i) {
  el = createItemes(jsonData[i]);
  content.appendChild(el);
}

function fill_content(jsonData) {
  content.innerHTML = "";
  for (let i = 0; i < jsonData.length; i++) {
    append(jsonData, i);
  }
}

fill_content(db);

function createItemeStories(jsonDataItem) {
  for (let i = 0; i < jsonDataItem.following.length; i++) {
    item = document.createElement("div");
    item.className = "items";

    item.addEventListener("click",function(){showModalStory(jsonDataItem.id)})

    it = document.createElement("div");
    it.className = "it";

    nam = document.createElement("span");
    nam.className = "name";
    nam.innerHTML = jsonDataItem.following[i].userName;

    im = document.createElement("img");
    im.className = "imgIt";
    im.src = "img/aks/" + jsonDataItem.following[i].pic;

    it.appendChild(im);
    item.appendChild(it);
    item.appendChild(nam);

    item.addEventListener("click", function () {
      showModalStory(jsonDataItem.following[i].fid);
    });

    galStory.appendChild(item);
  }
  return item;
}

function append_itStor(jsonData, i) {
  el = createItemeStories(jsonData[i]);
  galStory.appendChild(el);
}

function fill_story(jsonData) {
  galStory.innerHTML = "";
  for (let i = 0; i < jsonData.length; i++) {
    append_itStor(jsonData, i);
  }
}

fill_story(db);

function showModal(ParamId) {
  // alert(ParamId);
  modalPosts.className = "show";
  mainPage.className = "hide";

  // content.innerHTML = "";

  let curPost = db[0].posts.findIndex((el) => {
    return el.pid == ParamId;
  });
  console.log(curPost);
  mtncaption.innerHTML = "";
  // captionHide.innerHTML="";

  contentPostsImg.src = "img/aks/" + db[0].posts[curPost].pic;

  mtncaption.innerHTML = db[0].posts[curPost].caption;
  // captionHide.innerHTML = curEl.caption;
}

function showModalStory(ParamId) {
  // alert(ParamId);
  // =======
  modalStory.className = "show";
  //  modalHome.className="hide";

  let curEl = db[0].findIndex((el) => {
    return el.fid == ParamId;
  });

  username.innerHTML = curEl.userName;
  profileStoryImg.src = "img/aks/" + curEl.pic;
  modalStory.style.background = "img/aks/" +curEl.story.forEach(element => {
      return element;
  });
}

window.addEventListener('DOMContentLoaded', () =>{

  modalOpenEvent("agree");
  modalOpenEvent("quote");
  modalOpenEvent("complete");
  modalOpenEvent("branch");
  modalOpenEvent("review");
  modalOpenEvent("terms");
  modalOpenEvent("pop-sunting");
  // modalOpenEvent("pop-porter-bongo", true);
  modalOpenEvent("pop-g90", true);

  topBannerSetting();

  modalCloseEvent();

  topAdCloseEvent();

  modalGetReview();

  //랭크
  rankBoxEvent();

}
);

window.addEventListener('load',()=>{
  scrollMoveEvent();
});



let modalOpenEvent = (modalname, startOpen=false) =>{
  let btnOpenList = document.querySelectorAll(`.fn-open-modal-${modalname}`);
  let targetModal = document.querySelector(`.modal-${modalname}`);
  
  let openModal= () =>{
    targetModal.classList.add("modal-show");
    document.body.classList.add("modal-open-scroll-stop")
    //console.log(modalname, "작동");
  }

  btnOpenList.forEach(btn =>{
    btn.addEventListener("click", openModal);
  });

  if(startOpen === true){
    if(btnOpenList === null) return;
    if(targetModal === null) return;
    if(targetModal === null) return;
    openModal();
  }

}


let topBannerSetting = () =>{
  let topBanner = document.querySelector(`.outer-top-banner`);
  let closeTopBanner = document.querySelector(`.outer-top-banner .btn-close-banner`);
  // console.log(closeTopBanner);

  let closeBanner= () => {
    topBanner.style.display = "none";
  }

  closeTopBanner.addEventListener("click",closeBanner);
}




let modalCloseEvent =() =>{
  let btnCloseList = document.querySelectorAll(".fn-close-modal");
  //btnClose.closest(".modal-wrap");
  
  btnCloseList.forEach(btn =>{
    let targetModal = btn.closest(".modal-wrap");
    btn.addEventListener("click", ()=>{
      targetModal.classList.remove("modal-show");
      let isShowModal = document.querySelector(".modal-show");
      if(isShowModal == null){
        document.body.classList.remove("modal-open-scroll-stop")
      }
      
    });
  });
  
}




//두개 이상
let modalLinkCount = 0;
let modalCloseLinkEvent = () =>{
  let btnCloseList = document.querySelectorAll(".fn-close-modal-link")

  // btnCloseList.forEach(btn => {
  //   btn.dataset.link_id;
  // });
}


let topAdCloseEvent =() =>{
  let topAd = document.querySelector(".top-ad");
  let btnCloseAd = document.querySelector(".top-ad .btn-close-ad");
  //btnClose.closest(".modal-wrap");
  
  let closeTopAd = () =>{
    topAd.classList.add("ad-hidden");
  }

  btnCloseAd.addEventListener("click",closeTopAd)
  
}

let scrollMoveEvent = () =>{

  let storageKeyName ="scrollMoveTargetID";
  
  let getTargetID = localStorage.getItem(storageKeyName);
  // /console.log(getTargetID);
  
  if(getTargetID != null){
    let getTarget = document.querySelector(`[data-scroll-id='${getTargetID}']`);
    scrollMoveAction(getTarget);
    //console.log(getTarget);
    localStorage.removeItem(storageKeyName);
  }

  let btnTrigger = document.querySelectorAll("[data-scroll-target]");

  btnTrigger.forEach(btn=>{
    let targetID = btn.getAttribute("data-scroll-target");

    btn.addEventListener("click",(event)=>{
      
      let target = document.querySelector(`[data-scroll-id='${targetID}']`);
      if(target === null){
        localStorage.setItem(storageKeyName, targetID);
        return;
      }

      event.preventDefault();
      scrollMoveAction(target);
    });

  });

}

let scrollMoveAction = (target) =>{
  let pos = target.offsetTop - 20;
  window.scrollTo({top:pos, behavior:'smooth'});
}

let modalGetReview = () =>{
  const btnShowList = document.querySelectorAll('.fn-open-modal-review');
  const reviewModalTitle = document.querySelector('.modal-review .review-title');
  const reviewModalText = document.querySelector('.modal-review .review-text');
  const reviewModalImg = document.querySelector('.modal-review .img-area');
  const reviewModalName = document.querySelector('.modal-review .rank-area .name');

  for(const btn of btnShowList){
    btn.addEventListener("click", setInfo);
  };

  function setInfo(e){

    console.log(e.target)
    let reviewArea = e.target.parentNode;
    console.log(reviewArea);
    let getReviewTitle = reviewArea.querySelector(".review-title");
    let getReviewText = reviewArea.querySelector(".review-text");
    let getReviewImg = reviewArea.querySelector(".img-area");
    let getReviewName = reviewArea.querySelector(".rank-area .name");

    reviewModalTitle.innerHTML = getReviewTitle.innerHTML;
    reviewModalText.innerHTML = getReviewText.innerHTML;
    reviewModalImg.innerHTML = getReviewImg.innerHTML;
    reviewModalName.innerHTML = getReviewName.innerHTML;
  }
  //reviewModal.

};

//랭크박스 오픈

let rankBoxEvent = () =>{
  const btnOpen = document.querySelector(".fn-open-rankbox");
  const rankBox = document.querySelector(".open-rank-target");
  const btnClose = document.querySelector(".open-rank-target .btn-close-rank");

  btnOpen.addEventListener("click", openBox);
  btnClose.addEventListener("click", closeBox);

  function openBox(){
    rankBox.classList.add("rank-show");
  }
  function closeBox(){
    rankBox.classList.remove("rank-show");
  }
}
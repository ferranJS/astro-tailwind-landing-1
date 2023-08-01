const driver = window.driver.js.driver
const config = {
  showProgress: true,
  steps: [
    {
      element: "xxxx",
      popover: {
        title: "About this site",
        description:
          'This is a <i>remake</i> of the <a target="_blank" href="https://lavelada.es/"><u>la Velada 3</u></a> website. Despite the number of images and JavaScript code that appears to load, the total size of the package is <b>only 1MB</b>.',
      },
    },
  ],
}

config.steps.push({
  element: "div.relative", // #navs-drive-step
  popover: {
    title: "Bundle size",
    description:
      "To achieve this, <i><b>.avif</b></i> and <i><b>.webp</b></i> images are loaded depending on the screen size and browser format support, and using TailwindCSS to reduce the CSS size and importing.",
    onNextClick: () => {
      fightersHoverAnimation()
      driverObj.moveNext()
    },
  },
})
config.steps.push({
  element: "#driverjs-aux", // div.relative:nth-of-type(2)
  popover: {
    title: "Hover effect on the images",
    description:
      (window.innerWidth < 768 ? "<i>In order to view this effect, tap on the images.</i> " : "") +
      'This effect is achieved by adding a <i>event listener</i> to each image and changing its properties and the ones of the "enemy" image with <i><b>classList</b></i>.',
    side: "top",
    align: "center",
    // onPopoverRender: fightersHoverAnimation, // This is not working  :(
    onNextClick: () => {
      setTimeout(selectAllContents, 1000)
      driverObj.moveNext()
    },
  },
})
config.steps.push({
  element: "section",
  popover: {
    title: "Image clip-path for hover",
    description:
      "The CSS property <i><b>clip-path</b></i> is used to achieve a better hover effect. If not set, the transparent parts of each image would activate the hover, too. <u><a target='_blank' href='https://unused-css.com/tools/clip-path-generator'>This tool</a></u> was used to get the polygon. <i>You can see the result by selecting the images with your mouse cursor as if it were text</i>.",
    onPrevClick: () => {
      fightersHoverAnimation()
      driverObj.movePrevious()
    },
  },
})
config.steps.push({
  element: "#socials",
  popover: {
    title: "Check out my socials",
    description:
      "I love to keep myself updated and comment on the state of the art through Twitter and LinkedIn, so feel free to follow me there!",
  },
})

const driverObj = driver(config)

let fighters = ["German", "Amouranth", "Shelao", "Luzu", "Rivers", "Ampeter"]
const fightersHoverAnimation = fighter => {
  if (fighter) {
    document.getElementById(fighter).dispatchEvent(new Event("mouseleave"))
    fighters.shift()
  }
  if (fighters[0]) document.getElementById(fighters[0]).dispatchEvent(new Event("mouseenter"))
  else {
    fighters = ["German", "Amouranth", "Shelao", "Luzu", "Rivers", "Ampeter"]
    return
  }
  setTimeout(() => fightersHoverAnimation(fighters[0]), 1000)
}
function selectAllContents() {
  var range = document.createRange()
  range.selectNodeContents(document.querySelector("section"))
  var sel = window.getSelection()
  sel.removeAllRanges()
  sel.addRange(range)
}

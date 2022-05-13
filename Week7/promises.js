// Example
// Website users can upload several images. We need to get the image dimensions
//  for each image.
// We will use a promise to get the dimensions of each image.

const getWidthAndHeightFromDataUrl = (dataURL) =>
    new Promise((resolve) => {
        const img = new Image();
        img.onload = () => {
            resolve({
                width: img.width,
                height: img.height,
            });
            img.scr = dataURL;
        };
    });
//async keyword shows that js should be not executed line by line
//but it say that js don't wait the finishing of this function, go ahead
//just call this function but not execute it until inside is ready to display
document.getElementById("submit").onclick = async () => {
    console.log("test");
    //accesss files in array in memory
    const file = document.querySelector('[type="file"]').files[0];
    console.log(file);
    if (!file) {
        throw Error("You must specify a file");
    }

    const fileAsDataURL = window.URL.createObjectURL(file);
    const dimensions = await getWidthAndHeightFromDataUrl(fileAsDataURL);
    console.log(dimensions);
};

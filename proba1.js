<!DOCTYPE html>
<html>
<body>

<img id="myImage" onclick="changeImage()" src="pic_bulboff.gif" width="100" height="180">

<p>haz click para enceder y apagar.</p>

<script>
function changeImage() {
    var image = document.getElementById('myImage');
    if (image.src.match("")) {
        image.src = "pic_bulboff.gif";
    } else {
        image.src = "pic_bulbon.gif";
    }
}
</script>

</body>
</html>

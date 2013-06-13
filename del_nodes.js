//these are ID of the tags that are needed to delete to make UI nice

var ar=["gbzw","gbu","gbx1","gbx3","gbqfbwa","footer"];

//Just iterate on Dom tree and delete the tag
for(var i=0;i<ar.length;i++)
{
    element = document.getElementById(ar[i]);
    element.parentNode.removeChild(element);
}

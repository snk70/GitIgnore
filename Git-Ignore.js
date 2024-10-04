let rawPath="node_modules/@strapi/admin/admin/src/hooks"; #Enter your directory for Ignore in the Git


let outPutText=`#Ignore For ${rawPath} Path: `;
const rawPathParts=rawPath.split("/");
//console.log(rawPathParts);

for(let i:number=0;i<rawPathParts.length;i++){
if(i===0)
{
    outPutText +=`\n${rawPathParts[0]}/*`;
}else if(i===rawPathParts.length-1)
{
    outPutText +=`\n\n!${rawPath}`;
}else{
    outPutText +="\n\n";
    outPutText +="!";
    for(let j=0;j<=i;j++)
    {
        outPutText +=`${rawPathParts[j]}/`;
    }
    outPutText +="\n";
    for(let j=0;j<=i;j++)
    {
        outPutText +=`${rawPathParts[j]}/`;
    }
    outPutText+="*";
}

}
outPutText+=`\n#End Ignore For ${rawPath} Path`;
console.log(outPutText);

const blogContent = document.querySelector("section.blog-content");

const blogHeader = document.createElement('h1');
blogHeader.textContent = 'Adoptadog Blog';
blogHeader.setAttribute('class','blog-header');
blogContent.appendChild(blogHeader);

const blogCont = [
	{
		image: ["images/blog-1.jpg"],
		alt: 'Blog Image',
		header: 'Traveling With Your Dog',
		blogPost: 'Iduciendisite quo magnatem iuntum quid quaest ea am, tenderumet adis dolenem quidustrum fuga. Faceaquae estioria derum recuptatur, cum volore, undipsa doloreium hillupta aut es ut alitatuscit ommossum haritatur arum qui officae videbiti corporeium faccull oribus es quidignis ipietus explam sus am aut amet ant fugiatum, utem non reptat.',
		blogPost1: 'Uptiusd andesci qui nem aut vendion ectur? Debis que explaut laborenia que doluptur, con et labor abor sant poreperum dio quat que doluptatur aut voluptassim quisciatquam ea ad qui con nes cus esere dolut hicto teni solutenis alit ulparume nonseca estorer spernam voluptassim quisciatquam ea ad qui con nes cus esere dolut hicto teni solutenis alit ulparume nonseca estorer spernam.',
		blogLink: 'Read More>>'
	},
	{
		image: ["images/blog-2.jpg"],
		alt: 'Blog Image',
		header: 'How To Walk Multiple Dogs',
		blogPost: 'Iduciendisite quo magnatem iuntum quid quaest ea am, tenderumet adis dolenem quidustrum fuga. Faceaquae estioria derum recuptatur, cum volore, undipsa doloreium hillupta aut es ut alitatuscit ommossum haritatur arum qui officae videbiti corporeium faccull oribus es quidignis ipietus explam sus am aut amet ant fugiatum, utem non reptat.',
		blogPost1: 'Uptiusd andesci qui nem aut vendion ectur? Debis que explaut laborenia que doluptur, con et labor abor sant poreperum dio quat que doluptatur aut voluptassim quisciatquam ea ad qui con nes cus esere dolut hicto teni solutenis alit ulparume nonseca estorer spernam voluptassim quisciatquam ea ad qui con nes cus esere dolut hicto teni solutenis alit ulparume nonseca estorer spernam.',
		blogLink: 'Read More>>'
	},
	{
		image: ["images/blog-3.jpg"],
		alt: 'Blog Image',
		header: 'Teach Your Dog To Fetch!',
		blogPost: 'Iduciendisite quo magnatem iuntum quid quaest ea am, tenderumet adis dolenem quidustrum fuga. Faceaquae estioria derum recuptatur, cum volore, undipsa doloreium hillupta aut es ut alitatuscit ommossum haritatur arum qui officae videbiti corporeium faccull oribus es quidignis ipietus explam sus am aut amet ant fugiatum, utem non reptat.',
		blogPost1: 'Uptiusd andesci qui nem aut vendion ectur? Debis que explaut laborenia que doluptur, con et labor abor sant poreperum dio quat que doluptatur aut voluptassim quisciatquam ea ad qui con nes cus esere dolut hicto teni solutenis alit ulparume nonseca estorer spernam voluptassim quisciatquam ea ad qui con nes cus esere dolut hicto teni solutenis alit ulparume nonseca estorer spernam.',
		blogLink: 'Read More>>'
	},
];

const blogPost = document.createElement('div');
blogPost.setAttribute('class','blog-page-grid');
blogContent.appendChild(blogPost);

for (let i= 0; i < blogCont.length; i++) {

	const imageContainer = document.createElement('figure');
	imageContainer.setAttribute('class','blog-img');
	const image = document.createElement('img');
	image.setAttribute('src',blogCont[i].image);
	image.setAttribute('alt',blogCont[i].alt)
	imageContainer.appendChild(image);
	blogPost.appendChild(imageContainer);

	const blogTxt = document.createElement('article');
	blogPost.appendChild(blogTxt);

	const subheader = document.createElement('h2');
	const subheaderText = document.createTextNode(blogCont[i].header);
  blogTxt.setAttribute('class','blog-subheader');
	blogTxt.appendChild(subheader);
	subheader.appendChild(subheaderText);

	const post = document.createElement('p');
	const postText= document.createTextNode(blogCont[i].blogPost);
  blogTxt.setAttribute('class','blog-page-post');
	blogTxt.appendChild(post);
	post.appendChild(postText);

	const post2 = document.createElement('p');
	const postText2= document.createTextNode(blogCont[i].blogPost1);
  blogTxt.setAttribute('class','blog-page-post');
	blogTxt.appendChild(post2);
	post2.appendChild(postText2);

	const link = document.createElement('a');
	const blogLink= document.createTextNode(blogCont[i].blogLink);
  blogTxt.setAttribute('class','blog-page-post');
	blogTxt.appendChild(link);
	link.appendChild(blogLink);
}

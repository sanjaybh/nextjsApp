import footerStyles from '@/app/styles/footer.module.css'


const footerDetails = {
    "datasrc": [{
        "title": "Company",
        "items":[{
            "title" : "Home",
            "href" : "/home",
        },{
            "title" : "Contact us",
            "href" : "/contactus",
        },{
            "title" : "About us",
            "href" : "/about",
        },{
            "title" : "Get Started",
            "href" : "/gettingstarted",
        }]
    },{
        "title": "Services",
        "items":[{
            "title" : "App design",
            "href" : "#",
        },{
            "title" : "Web design",
            "href" : "#",
        },{
            "title" : "About Logo design",
            "href" : "#",
        },{
            "title" : "Banner design",
            "href" : "#",
        }]
    },{
        "title": "Account",
        "items":[{
            "title" : "Profile",
            "href" : "#",
        },{
            "title" : "My account",
            "href" : "#",
        },{
            "title" : "Prefrences",
            "href" : "#",
        },{
            "title" : "Purchase",
            "href" : "#",
        }]
    },{
        "title": "Courses",
        "items":[{
            "title" : "HTML & CSS",
            "href" : "#",
        },{
            "title" : "JavaScript",
            "href" : "#",
        },{
            "title" : "Photography",
            "href" : "#",
        },{
            "title" : "Photoshop",
            "href" : "#",
        }]
    }]
}

const FooterItems = () => {
  return (
    <>
        {footerDetails.datasrc.map((item) => (
            <ul className={footerStyles.box}>
                <li className={footerStyles.link_name}>{item.title}</li>
                { item.items.map((child) => (<li><a href={child.href}>{child.title}</a></li>)) }
            </ul>
        ))}
    </>
  )
}

export default FooterItems
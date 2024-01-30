import { useEffect, useState } from 'react';

const Home = () => {
    const [students, setStudents] = useState(null)

    useEffect(() => {
        const fetchStudents = async () => {
            const response = await fetch('/api/students')
            const json = await response.json()

            if (response.ok) {
                setStudents(json)
            }
        }

        fetchStudents()

    }, [])

    return (
        <div className="home">
            <h2>Students</h2>
            <main>
                <div className="students">
                    {students && students.map((student) => (
                        <article className="student" key={"student" + student._id}>
                            <div className="studentPortraitContainer" key={"studentPortraitContainer" + student._id}>
                                <img className="studentPortrait" key={"studentPortrait" + student._id} src={student.personalPortraitUrl} alt={"Image of" + student.firstName + " " + student.lastName}></img>
                                <div className="studentSentenceContainer" key={"studentSentenceContainer" + student._id}>
                                    <div className="studentSentenceIntro" key={"studentSentenceIntro" + student._id}>THIS IS THE PLACE</div>
                                    <div className="studentSentenceText" key={"studentSentenceText" + student._id}>{student.personalSentenceText}</div>
                                </div>
                            </div>
                            <div className="studentInfoContainer" key={"studentInfoContainer" + student._id}>

                                <h3 className="studentName" key={"studentName" + student._id}>{student.firstName} {student.lastName}</h3>
                                <div className="studentBlurbContainer" key={"studentBlurbContainer" + student._id}>
                                    <div className="studentDetailsContainer" key={"studentDetailsContainer" + student._id}>
                                        <p className="studentBioHeading" key={"studentBioHeading" + student._id} >Bio</p>
                                        <p className="studentBio" key={"studentBio" + student._id}>{student.bio}</p>
                                        <a href={"/student/" + student._id} className="studentPageLink" key={"studentpageLink" + student._id}>See their work</a>
                                    </div>
                                    <div className="studentContactContainer" key={"studentContactContainer" + student._id}>
                                        <p className="studentContactHeading" key={"studentContactHeading" + student._id}>Contact</p>
                                        <ul className="studentContactList" key={"studentContactList" + student._id}>
                                            {!(student.instagramUsername) ? student.instagramUsername :
                                                <li className="studentInstagramLinkContainer" key={"studentInstagramLinkContainer" + student._id}>

                                                    <a className="studentInstagramLink" href={"https://www.instagram.com/" + student.instagramUsername} key={"studentInstagramLink" + student._id}><span className="icon-instagram"></span></a>

                                                </li>
                                            }
                                            {!(student.twitterUsername) ? student.twitterUsername :
                                                <li className="studentTwitterLinkContainer" key={"studentTwitterLinkContainer" + student._id}>

                                                    <a className="studentTwitterLink" href={"https://www.twitter.com/" + student.twitterUsername} key={"studentTwitterLink" + student._id}><span className="icon-twitter"></span></a>

                                                </li>
                                            }
                                            {!(student.facebookUsername) ? student.facebookUsername :
                                                <li className="studentFacebookLinkContainer" key={"studentFacebookLinkContainer" + student._id}>

                                                    <a className="studentFacebookLink" href={"https://www.facebook.com/" + student.facebookUsername} key={"studentFacebookLink" + student._id}><span className="icon-facebook"></span></a>

                                                </li>
                                            }
                                            {!(student.benahceUsername) ? student.behanceUsername :
                                                <li className="studentBehanceLinkContainer" key={"studentBehanceLinkContainer" + student._id}>
                                                    <a className="studentBehanceLink" href={"https://www.behance.net/" + student.behanceUsername} key={"studentBehanceLink" + student._id}><span className="icon-behance"></span></a>
                                                </li>
                                            }{!(student.dribbleUsername) ? student.dribbleUsername :
                                                <li className="studentDribbleLinkContainer" key={"studentDribbleLinkContainer" + student._id}>
                                                    <a className="studentDribbleLink" href={"https://www.dribble.com/" + student.dribbleUsername} key={"studentDribbleLink" + student._id}><span className="icon-dribble"></span></a>
                                                </li>
                                            }
                                            <li className="studentEmailLinkContainer" key={"studentEmailLinkContainer" + student._id}>
                                                <a className="studentEmailLink" href={"mailto:" + student.personalEmail} key={"studentEmailLink" + student._id}><span className="icon-email"></span></a>
                                            </li>
                                            {!(student.portfolioUrl) ? student.portfolioUrl :
                                                <li className="studentPortfolioLinkContainer" key={"studentPortfolioLinkContainer" + student._id}>
                                                    <a className="studentPortfolioLink" href={student.portfolioUrl} key={"studentPortfolioLink" + student._id}><span className="icon-earth"></span></a>
                                                </li>
                                            }

                                        </ul>
                                    </div>
                                </div>

                            </div>

                        </article>



                    ))}

                </div>
            </main>
        </div >
    )
}

export default Home
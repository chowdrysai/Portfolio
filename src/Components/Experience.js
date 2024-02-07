import React from 'react';

import {
    VerticalTimeline,
    VerticalTimelineElement,
} from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
    faBriefcase,
} from '@fortawesome/free-solid-svg-icons';

const workIcon = {
    icon: <FontAwesomeIcon icon={faBriefcase} />,
    iconStyle: { background: 'rgb(33, 150, 243)', color: '#fff' },
};

function Experience() {
    const timeline = [
        {
            icon: workIcon,
            date: '2023, July - present',
            title: 'SOFTWARE ENGINEER',
            subtitle: 'AADVI TECH.SOLUTIONS',
            desc: 'JavaScript, MERN stack developer, UI(User Interface) design, Postman API ,MySQL, Git/GitHub, Docker,',
        },
        {
            icon: workIcon,
            date: '2022, May - 2022, June',
            title: 'INTERNSHIP',
            subtitle: 'GUSTOVALLEY TECHNOVATION',
            desc: 'Web development, HTML, CSS, Bootstrap',
        },

    ];

    return (
        <>
            <h1 className='SkillsHeading' style={{marginTop:'100px'}}> Professional <b> Experience </b> </h1>
            <div  style={{paddingLeft:'0%', width:'100%',minHeight:'70vh', display:'flex',justifyContent:'center',alignItems:'center'}} >
                <VerticalTimeline layout="1-column">
                    {timeline.map((t, i) => {
                        const contentStyle ={ background: 'rgb(33, 150, 243)', color: '#000' };
                        const arrowStyle ={ borderRight: '7px solid  rgb(33, 150, 243)' };
                        return (
              
                            <VerticalTimelineElement
                                key={i}
                                className="vertical-timeline-element--work"
                                contentStyle={contentStyle}
                                contentArrowStyle={arrowStyle}
                                date={t.date}
                                {...t.icon}
                            >
                                {t.title ? (
                                    <React.Fragment>
                                        <h3 className="vertical-timeline-element-title">{t.title}</h3>
                                        {t.subtitle && (
                                            <h4 className="vertical-timeline-element-subtitle">
                                                {t.subtitle}
                                            </h4>
                                        )}
                                        {t.desc && <p>{t.desc}</p>}
                                    </React.Fragment>
                                ) : undefined}
                            </VerticalTimelineElement>
                        );
                    })}
                </VerticalTimeline>
            </div>
        </>
    );
}

export default Experience;

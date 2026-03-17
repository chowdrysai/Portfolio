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
            date: 'July 2025 - Feb 2026',
            title: 'SR. SOFTWARE ENGINEER',
            subtitle: 'Max Trans Systems, Hyderabad',
            desc: 'Led frontend revamp with reusable components, Redis caching, API rate limiting, and high-volume PDF/data pipelines on SQL.',
        },
        {
            icon: workIcon,
            date: 'April 2025 - June 2025',
            title: 'FREELANCE ENGINEER',
            subtitle: 'Nexg Works, Hyderabad',
            desc: 'Designed secure authentication (2FA, IP tracking, CSP) and automated CI/CD pipelines for faster, safer releases.',
        },
        {
            icon: workIcon,
            date: 'July 2023 - March 2025',
            title: 'SOFTWARE DEVELOPER',
            subtitle: 'Aadvi Tech Solution, Hyderabad',
            desc: 'Delivered production-grade web apps, optimized React/Redux performance, and built WebSocket-based real-time notifications.',
        },
        {
            icon: workIcon,
            date: 'May 2023 - June 2023',
            title: 'SOFTWARE INTERN',
            subtitle: 'Gusto Valley Technovations, Hyderabad',
            desc: 'Built responsive React/Next.js interfaces using custom hooks and scalable state management.',
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

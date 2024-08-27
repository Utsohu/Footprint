import React, { CSSProperties } from 'react';
import { useGetList,Loading, Title } from 'react-admin';
import { useMediaQuery, Theme} from '@mui/material';
import CardWithIcon from './CardWithIcon';
import Welcome from './Welcome';


import GradeIcon from '@mui/icons-material/Grade';
import WorkIcon from '@mui/icons-material/Theaters';
import ExperienceIcon from '@mui/icons-material/Work';
import HonourIcon from '@mui/icons-material/Pets';

import MyCourses from './MyCourses';
import Today from './Today';
import Thing from './Thing';

const styles = {
    flex: { display: 'flex' },
    flexColumn: { display: 'flex', flexDirection: 'column' },
    leftCol: { flex: 2, marginRight: '0.5em' },
    rightCol: { flex: 1, marginLeft: '0.5em' },
    singleCol: { marginTop: '1em', marginBottom: '1em' },
};

const Spacer = () => <span style={{ width: '1em',marginBottom:'1em' }} />;

const Dashboard = () => {
    const isXSmall = useMediaQuery((theme: Theme) =>
        theme.breakpoints.down('sm')
    );
    const isSmall = useMediaQuery((theme: Theme) =>
        theme.breakpoints.down('lg')
    );
    const { data:mains } = useGetList('main');
    if(mains == undefined|| mains.length<0) return (<p>Load Error</p>); 
    let main = mains[0];
    return isXSmall ? (
        <div>
            <div style={styles.flexColumn as CSSProperties}>
                <Welcome  main={main}/>
                <Spacer />
                <CardWithIcon to={"/grade"} icon={GradeIcon} title={"Cumulative GPA"} subtitle={main.gpa}/>
                <Spacer />
                <CardWithIcon to={"/experience"} icon={ExperienceIcon} title={"Experiences"} subtitle={main.experience_num}/>
                <Spacer />
                <CardWithIcon to={"/work"} icon={WorkIcon} title={"Works"} subtitle={main.work_num}/>
                <Spacer />
                <CardWithIcon to={"/honour"} icon={HonourIcon} title={"Honours"} subtitle={main.honour_num}/>
            </div>
        </div>
    ) : isSmall ? (
        <div style={styles.flexColumn as CSSProperties}>
            <div style={styles.singleCol}>
                <Welcome  main={main}/>
            </div>
            <div style={styles.flex}>
                <CardWithIcon to={"/grade"} icon={GradeIcon} title={"Cumulative GPA"} subtitle={main.gpa}/>
                <Spacer />
                <CardWithIcon to={"/experience"} icon={ExperienceIcon} title={"Experiences"} subtitle={main.experience_num}/>
                <Spacer />
                <CardWithIcon to={"/work"} icon={WorkIcon} title={"Works"} subtitle={main.work_num}/>
                <Spacer />
                <CardWithIcon to={"/honour"} icon={HonourIcon} title={"Honours"} subtitle={main.honour_num}/>
            </div>
            <div style={styles.singleCol}>
                <Today ></Today>
            </div>
        </div>
    ) : (
        <>
            <Title title="Dashboard"></Title>
            <Welcome main={main}/>
            <div style={styles.flex}>
                <CardWithIcon to={"/grade"} icon={GradeIcon} title={"Cumulative GPA"} subtitle={main.gpa}/>
                <Spacer />
                <CardWithIcon to={"/experience"} icon={ExperienceIcon} title={"Experiences"} subtitle={main.experience_num}/>
                <Spacer />
                <CardWithIcon to={"/work"} icon={WorkIcon} title={"Works"} subtitle={main.work_num}/>
                <Spacer />
                <CardWithIcon to={"/honour"} icon={HonourIcon} title={"Honours"} subtitle={main.honour_num}/>
            </div>
            <div style={styles.flex}>
                <div style={styles.leftCol}>
                    <div style={styles.singleCol}>
                        <MyCourses/>
                    </div>
                </div>
                <div style={styles.rightCol}>
                    <Today ></Today>
                </div>
                <div style={styles.rightCol}>
                    <Thing></Thing>
                </div>
            </div>
        </>
    );
};

export default Dashboard;

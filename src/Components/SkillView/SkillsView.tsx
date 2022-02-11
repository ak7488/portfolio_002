import { useCallback, useEffect, useRef, useState } from 'react';
import { useSelector } from 'react-redux';
import './SkillsView.css';

const SkillsView = () => {
    const {} = useSelector((state) => state);
    const SkillsViewElement = useRef(null);
    const [skillInfo, setSkllInfo] = useState({})

    const loadSkillDataHandler = () => {
        try {

        } catch (e) {

        }
    };

    useEffect(() => {
        loadSkillDataHandler();
    }, [])

    return (
        <div className="skills_view" ref={SkillsViewElement}>
            <h2>Skills</h2>
            <div className="skill_card_container">
                <div className="skill_card">
                    
                </div>
            </div>
        </div>
    )
};

export default SkillsView;
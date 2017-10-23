import React from 'react';

const TrialDetail = ({item}) => {
    if (!item.hasOwnProperty("Nct")) {
        return <div className="item-detail col-md-5"></div>
    }

    return (
        <div className="item-detail col-md-5">
            Clinical trial
            <div className="details">
                <div><b>Nct:</b> {item.Nct}</div>
                <div><b>BriefTitle:</b> {item.BriefTitle}</div>
                <div><b>OfficialTitle:</b> {item.OfficialTitle}</div>
                <div><b>Summary:</b> {item.BriefSummary}</div>
                <div><b>Status:</b> {item.Status}</div>
                <div><b>Phase:</b> {item.Phase}</div>
                <div><b>StartDate:</b> {item.StartDate}</div>
                <div><b>PrimaryCompletionDate:</b> {item.PrimaryCompletionDate}</div>
                <div><b>StudyType:</b> {item.StudyType}</div>
                <div>
                    <b>Locations:</b>
                    <ul>
                    {item.Locations != null && item.Locations.map((item, index) => (
                        <li key={index}>{item.Name}, IN: {item.Country}</li>
                    ))}
                    </ul>
                </div>
                <div>
                    <b>MeshTerms:</b>
                    <ul>
                    {item.MeshList != null && item.MeshList.map((item, index) => (
                        <li key={index}>{item.Name}</li>
                    ))}
                    </ul>
                </div>
                <div>
                    <b>Keywords:</b>
                    <ul>
                    {item.Keywords != null && item.Keywords.map((item, index) => (
                        <li key={index}>{item}</li>
                    ))}
                    </ul>
                </div>
                <div>
                    <b>Conditions:</b>
                    <ul>
                    {item.Conditions != null && item.Conditions.map((item, index) => (
                        <li key={index}>{item}</li>
                    ))}
                    </ul>
                </div>
                <div>
                    <b>Interventions:</b>
                    <ul>
                    {item.Interventions != null && item.Interventions.map((item, index) => (
                        <li key={index}>{item.Name}</li>
                    ))}
                    </ul>
                </div>
                <div>
                    <b>Experts:</b>
                    <ul>
                    {item.Experts != null && item.Experts.map((item, index) => (
                        <li key={index}>{item.LastName} | {item.Placeholder} | {item.Role}</li>
                    ))}
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default TrialDetail;
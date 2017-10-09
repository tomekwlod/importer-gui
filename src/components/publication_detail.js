import React from 'react';

const PublicationDetail = ({item}) => {
    if (!item.hasOwnProperty("Pmid")) {
        return <div className="item-detail col-md-5"></div>
    }

    return (
        <div className="item-detail col-md-5">
            Publication
            <div className="details">
                <div><b>Pmid:</b> {item.Pmid}</div>
                <div><b>Title:</b> {item.Title}</div>
                <div>
                    <b>AbstractText:</b>
                    <ul>
                    {item.AbstractText != null && item.AbstractText.map((item, index) => (
                        <li key={index}>{item.Text}</li>
                    ))}
                    </ul>
                </div>
                <div>
                    <b>Journal:</b>
                    <ul>
                        <li key={item.Journal.ISSN}>{item.Journal.Title}:{item.Journal.Year}</li>
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
                    <b>Experts:</b>
                    <ul>
                    {item.AuthorList != null && item.AuthorList.map((item, index) => (
                        <li key={index}>{item.ForeName} {item.LastName} {item.Initials} | <i>{item.Affiliation}</i></li>
                    ))}
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default PublicationDetail;
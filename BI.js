import React from 'react';
import { Embed } from '@powerbi/powerbi-react';

const BI = () => {
    return (
        <section id="bi">
            <h2>BI</h2>
            <Embed
                url="https://app.powerbi.com/reportEmbed"
                reportId="your-report-id"
                groupId="your-group-id"
                config={{
                    type: 'report',
                    tokenType: 0,
                    permissions: 'View',
                }}
            />
        </section>
    );
};

export default BI;

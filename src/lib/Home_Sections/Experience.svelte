
<div class="container">
    <h2>Work Experience</h2>
    <div class="workplaceBlock">
    <div class="workplaceList">
    <ul class="companyList">
        <li>
            Burckhardt Compression
        </li>
        <li>
            ...
        </li>
    </ul>
</div>
<div class="workplaceDescription">
    <h3>Intern <span>@ BCAG</span></h3>
    <p class="date">August 2019 - August 2020</p>
    <ul>
        <li>
            <p>Created and maintained CAD drawings using Siemens NX</p>
        </li>
        <li>
            <p>Involved in Subprojects for Compressor Auxiliary parts such as Lubrication Units and Coolant pipping</p>
        </li>
        <li>
            <p>Updating Companies Material properties list</p>
        </li>
    </ul>
</div>
</div>
</div>

<style>
    .container {
        display: flex;
        flex-direction: column;
    }
    .workplaceBlock {
        width: 100%;
        display: grid;
        gap: 1rem;
        grid-template-columns: 10ch 1fr;
        grid-template-areas: 'workList workDescription';
    }
    .workplaceList {
        grid-area: workList;
    }
    .workplaceDescription {
        grid-area: workDescription;
    }
    .date {
        font-size: 0.75rem;
    }
    ul {
        list-style-type: none;
    }
    li {
        font-size: 0.75rem;
        padding: 0.5rem 0rem;
    }
    span {
        color: aquamarine;
    }

    @media (max-width: 650px) {
        .companyList {
            max-width: 10ch;
            display: flex;
            flex-direction: row;
        }
        li {
            padding-right: 0.5rem;
        }
		.workplaceBlock {
			grid-template-columns: 1fr;
            grid-template-rows: 3rem 1fr;
            grid-template-areas: 
            'workList'
            'workDescription';
		}
	}
</style>
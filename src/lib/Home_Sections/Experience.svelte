
<div class="container">
    <h2>Work Experience</h2>
    <div class="workplaceBlock">
    <div class="workplaceList">
    <ul class="companyList">
        <li>
            <button>Burckhardt Compression</button>
        </li>
        <li>
            <button>...</button>
        </li>
    </ul>
</div>
<div class="workplaceDescription">
    <h3>Intern <span>@ BCAG</span></h3>
    <p class="date">August 2019 - August 2020</p>
    <ul class="taskList">
        <li class="taskItem">
            Created and maintained CAD drawings using Siemens NX
        </li>
        <li class="taskItem">
            Involved in Subprojects for Compressor Auxiliary parts such as Lubrication Units and Coolant pipping
        </li>
        <li class="taskItem">
            Updating Companies Material properties list
        </li>
    </ul>
</div>
</div>
</div>

<style>
    button {
        margin: 0;
        border-radius: 0;
        border-top: hidden;
        border-bottom: hidden;
        border-right: hidden;
        height: 100%;
        width: 100%;
        text-align: left;
        font-size: 0.75rem;
    }
    .container {
        display: flex;
        flex-direction: column;
    }
    .workplaceBlock {
        width: 100%;
        display: grid;
        gap: 2rem;
        grid-template-columns: 10ch 1fr;
        grid-template-areas: 'workList workDescription';
    }
    .workplaceList {
        grid-area: workList;
    }
    .workplaceDescription {
        grid-area: workDescription;
    }
    .taskList {
        padding-top: 2rem;
        max-width: 50ch;
    }
    .taskItem {
        position: relative;
        padding-left: 1rem;
        margin-bottom:0.5rem;
    }
    .taskItem::before {
        position: absolute;
        left: 0;
        color: aquamarine;
        content: "‣";

    }
    .date {
        font-size: 0.75rem;
    }
    ul {
        list-style-type: none;
    }
    li {
        font-size: 0.75rem;
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

<div class="container">
    <h2>Work Experience</h2>
    <div class="workplaceBlock">
    <div class="workplaceList">
    <ul class="companyList">
        <li class="companyItem">
            <input type="radio" class="tabs_radio" name="tabs-experience" id="tab-1" checked>
            <label for="tab-1">Burckhardt Compression</label>
        </li>
        <li class="companyItem">
            <input type="radio" class="tabs_radio" name="tabs-experience" id="tab-2" checked>
            <label for="tab-2">...</label>
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
    label {
        display:flex;
        text-align: left;
        height:100%;
        padding: 0.5rem;
        border-left: 2px solid var(--text-light-secondary)
    }   
    label:hover {
        cursor: pointer;
        color:var(--primary);
        

    }
    .tabs_radio:checked+label {
        color: var(--primary);
        background: var(--primary-highlight);
        border-left: 2px solid var(--primary);
        transition: 0.3s ease-in;
    }
    .tabs_radio {
        display:none;
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
        font-weight: bold;
        color: var(--primary);
        content: "⁙";

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
        color: var(--primary);
    }

    @media (max-width: 650px) {
        .companyList {
            max-width: 10ch;
            display: flex;
            flex-direction: row;
            height: 100%;
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
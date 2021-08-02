<script>
 let experiences = ['Burckhardt Compression', '...'];
 let activeExperience = 'Burckhardt Compression';

</script>


<div class="container">
    <h2>Work Experience</h2>
    <div class="workplaceBlock">
    <div class="workplaceList">
    <ul class="companyList">
        {#each experiences as experience}
        <li>
            <div class="companyItem" class:active={experience === activeExperience}>{experience}</div>
        </li>
        {/each}
    </ul>
</div>
<div class="workplaceDescription">
    <h3>Intern <span>@BCAG</span></h3>
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
    .active {
        color: var(--primary);
        background: var(--primary-highlight);
        border-left: 2px solid var(--primary)
    }
    .companyList{
        display: flex;
        flex-direction: column;
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
        font-size: 0.75rem;
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
        font-size: 0.85rem;;
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
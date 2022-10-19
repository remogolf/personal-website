<script>
 let experiences = ['Burckhardt Compression', 'Fotokite'];
 let activeExperience = 'Fotokite';

</script>


<div class="container">
    <h2>Work Experience</h2>
    <div class="grid-container">
        <div class="workplaceList">
            <ul class="companyList">
            {#each experiences as experience}
            <li on:click={() => activeExperience = experience}>
                <div class="companyItem" class:active={experience === activeExperience}>{experience}</div>
            </li>
            {/each}
            </ul>
        </div>
    </div>
    {#if activeExperience === 'Burckhardt Compression'}
    <div class="workplaceDescription">
        <h3>Intern <span><a href="https://www.burckhardtcompression.com/" target="_blank" rel="noopener noreferrer">@BCAG</a></span></h3>
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
    {:else}
    <div class="workplaceDescription">
        <h3>Field Application Engineer <span><a href="https://fotokite.com/" target="_blank" rel="noopener noreferrer">@Fotokite</a></span></h3>
        <p class="date">December 2022 - now</p>
        <ul class="taskList">
            <li class="taskItem">
                Customer Tech Support
            </li>
            <li class="taskItem">
                Hardware and Testing Support
            </li>
            <li class="taskItem">
                CAD & 3D printing
            </li>
            <li class="taskItem">
                Create Support Structure and Documentation
            </li>
        </ul>
    </div>
    {/if}
</div>




<style>
    .active {
        color: var(--primary);
        background: var(--primary-highlight);
        border-left: 2px solid var(--primary)
    }
    .companyList{
        display: flex;
        flex-direction: row;
        padding: 0rem 0 1rem 0rem;
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
    li {
        cursor:pointer;
        padding: 0 1rem 0 0;
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
		.grid-container {
			grid-template-columns: 1fr;
            grid-template-rows: 3rem 1fr;
            grid-template-areas: 
            'workList'
            'workDescription';
		}
	}
</style>
<script>
    import {services, tech} from './../stores/services.js'
</script>
<section>
    {#each services as service}
        {service.name}
        {service.heading}
        {@html service.p}
        <ul>
        {#each service.li as li}
            <li>
                {li}
            </li>
        {/each}
        </ul>
    {/each}
</section>
<section>
    <ul>
    {#each tech as t}
        <li>{t.name}</li>
    {/each}
    </ul>
</section>
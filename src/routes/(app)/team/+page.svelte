<script>
    import TeamMember from "$lib/components/TeamMember.svelte";
    import { team1, team2 } from "$lib/data/team";
</script>
<div class="mx-auto mt-10 w-full flex flex-row flex-wrap justify-center items-stretch align-middle gap-10 pb-10">
    <!-- <h1 id="team" class="text-4xl mx-auto text-center text-base-content w-screen vimh mb-6 hidden">Our Team</h1> -->
    <h1 id="team" class="text-[2.75rem] leading-[3rem] lg:text-[6rem] lg:leading-[6.25rem] mx-auto text-center text-base-content w-screen vimh my-6">Core Team</h1>
    <div class="flex flex-row flex-wrap w-11/12 gap-4">
        <!-- <TeamMember name="Ved Nande" role="President" decor="border-orange-500" />
        <TeamMember name="Madhur Manekar" role="Vice President" decor="border-amber-500" />
        <TeamMember name="Abhishek Khond" role="Secretary" decor="border-cyan-500" />
        <TeamMember name="Aryan Waghmare" role="Treasurer" decor="border-blue-500" />
        <TeamMember name="Naresh Chandanbatve" role="Technical Head" decor="border-indigo-500" />
        <TeamMember name="Tamanna Kartari" role="Lady Representative" decor="border-pink-500" />
        <TeamMember name="Sayali Warkhade" role="Sports Co-ordinator" decor="border-lime-500" />
        <TeamMember name="Saurabh Yadav" role="Sports Co-ordinator" decor="border-lime-500" />
        <TeamMember name="Devansh Parapalli" role="Technical Co-Head" decor="border-emerald-500" />
        <TeamMember name="Kinjal Tiwari" role="Technical Co-Head" decor="border-emerald-500" />
        <TeamMember name="Vishal Kesharwani" role="Sr. Executive Committee Member" decor="border-fuchsia-500" />
        <TeamMember name="Tushar Nagare" role="Sr. Executive Committee Member" decor="border-fuchsia-500" />
        <TeamMember name="Mrudula Wankar" role="Executive Committee Member" decor="border-fuchsia-500" />
        <TeamMember name="Jay Bele" role="Executive Committee Member" decor="border-fuchsia-500" />
        <TeamMember name="Sahil Kuhikar" role="Executive Committee Member" decor="border-fuchsia-500" />
        <TeamMember name="Priya Nandanwar" role="Executive Committee Member" decor="border-fuchsia-500" />
        <TeamMember name="Gayatri Deshkar" role="Executive Committee Member" decor="border-fuchsia-500" /> -->
        {#each team1 as person}
            <TeamMember {...person} />
        {/each}
    </div>
    <h1 id="team" class="text-[2.75rem] leading-[3rem] lg:text-[6rem] lg:leading-[6.25rem] mx-auto text-center text-base-content w-screen vimh mb-6 mt-32">Synergy Team</h1>
    <div class="flex flex-row flex-wrap w-11/12 gap-4">
        {#each team2 as person}
            <TeamMember {...person} />
        {/each}
    </div>
</div>

<style lang="postcss">
    /* .t-grid {
        /* background: linear-gradient(to top, rgb(29, 78, 216), rgb(30, 64, 175), rgb(17, 24, 39)); 
        display: grid;
        grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
    } */
</style>
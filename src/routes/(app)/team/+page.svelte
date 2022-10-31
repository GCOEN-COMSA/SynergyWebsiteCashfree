<script>
    import TeamMember from "$lib/components/TeamMember.svelte";

</script>
<div class="mx-auto mt-10 w-full flex flex-row flex-wrap justify-center items-stretch align-middle gap-10 pb-10">
    <h1 id="team" class="text-[5rem] xl:text-[6rem] mx-auto text-center text-base-content w-screen vimh mb-6">Team</h1>
    <div class="t-grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 w-11/12 gap-4">
        <TeamMember />
        <TeamMember />
        <TeamMember />
        <TeamMember />
        <TeamMember />
    </div>
</div>

<style>
    .t-grid {
        /* background: linear-gradient(to top, rgb(29, 78, 216), rgb(30, 64, 175), rgb(17, 24, 39)); */
        display: grid;
        grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
    }
</style>
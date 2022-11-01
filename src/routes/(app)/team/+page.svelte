<script>
    import TeamMember from "$lib/components/TeamMember.svelte";

</script>
<div class="mx-auto mt-10 w-full flex flex-row flex-wrap justify-center items-stretch align-middle gap-10 pb-10">
    <h1 id="team" class="text-[5rem] xl:text-[6rem] mx-auto text-center text-base-content w-screen vimh mb-6">Team</h1>
    <div class="t-grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 w-11/12 gap-4">
        <TeamMember name="Ved Nande" role="President" decor="border-orange-500" />
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
        <TeamMember name="Gayatri Deshkar" role="Executive Committee Member" decor="border-fuchsia-500" />
    </div>
</div>

<style>
    .t-grid {
        /* background: linear-gradient(to top, rgb(29, 78, 216), rgb(30, 64, 175), rgb(17, 24, 39)); */
        display: grid;
        grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
    }
</style>
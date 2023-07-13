import axios from "axios";

const GetLovepik = () => {
  const handleSubmit = async (e) => {
    e.preventDefault();
    const res = await axios.create({
      url: "https://lovepik.com/download/getDownloadUrl",
      method: "POST",
      data: {
        pid: 611748970,
        type: 1,
        byso: 1,
      },
      headers: {
        Cookie:
          '_ga_E2FHWTDNY0=GS1.1.1678120826.1.1.1678120885.0.0.0; _ga=GA1.1.2088361363.1658930265; love_guojia=VN; from_data=YTo3OntzOjQ6Imhvc3QiO3M6MTQ6Ind3dy5nb29nbGUuY29tIjtzOjM6InNlbSI7YjowO3M6MTA6InNvdXJjZWZyb20iO2k6MDtzOjQ6IndvcmQiO047czozOiJraWQiO2k6MDtzOjc6ImNvdW50cnkiO3M6MjoiVk4iO3M6ODoiaXNfcGhvdG8iO2k6MDt9; g_state={"i_p":1689419365396,"i_l":4}; _ga_HLNFVG1QVY=GS1.1.1687399932.1.1.1687399972.0.0.0; uniqid=64a10deeaf553; PHPSESSID=1d68619687ebbbdafe4db3917ac8f6fb; by_cate=3600; session_data=YTo1OntzOjM6InVpZCI7czo3OiI0NDgwMTgwIjtzOjU6InRva2VuIjtzOjMyOiIxY2NjMjQwN2NlNDRhODQ0MDdmMTY0NGI5YTZjY2E3MCI7czozOiJ1dXQiO3M6MzI6ImY0MWVlZmIzNWJkZDMyOTQ5MTZiYjFlMmEzNWU2ZjUyIjtzOjQ6ImRhdGEiO2E6MTp7czo4OiJ1c2VybmFtZSI7czo5OiJBZG1pbiBCS0giO31zOjY6ImV4dGltZSI7aToxNjkxNzM3NjY2O30%3D; show_active=1; uid=4480180; love_vip_expire=1689143079; love_tank_ny=1; login_user_4480180=1; love_msg_count=0; recent_search_data=halloween%2Cwater; lp_uif_pay=1349_657; _ga_E81V2Z6WNE=GS1.1.1689159794.21.1.1689161913.0.0.0',
      },
    });
    console.log("Res", res);
  };
  return (
    <form onSubmit={handleSubmit}>
      <input type="text" placeholder="Enter link Lovepik" />
      <button type="submit">Getlink</button>
    </form>
  );
};

export default GetLovepik;

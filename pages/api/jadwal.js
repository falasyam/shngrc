export async function getServerSideProps() {
  // Fetch data from external API
  const res = await fetch(
    `https://gist.githubusercontent.com/falasyam/39d7a9a88b9fed6f10a011290ff6b1a9/raw/905d6d8dd8eafae9d4875c52d971dfdccc96f796/jadwalsg.json`
  );
  const jadwals = await res.json();

  console.log(jadwals);

  // Pass data to the page via props
  return { props: { jadwals } };
}

const JadwalGrids = ({ jadwals }) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
      {jadwals.map((jadwal) => (
        <div
          className="bg-purple-400 rounded-lg p-4 bg-cover bg-center"
          key={jadwal.judul}
          style={{
            backgroundImage: `url("https://jkt48.com/assets/theater/actual/gate.jpg")`,
          }}
        >
          <span className="bg-red-800/90 rounded-full px-4 py-2 font-bold text-white text-base">
            {jadwal.setlist}
          </span>
          <div className="py-4"></div>
          <br />
          <span className="bg-red-800/90 text-white rounded-full px-4 py-2">
            <span className="">{jadwal.tanggal}</span>
            {" - "}
            <span className="">{jadwal.pukul}</span>
          </span>
        </div>
      ))}
    </div>
  );
};

export default JadwalGrids;

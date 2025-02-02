export default function ScheduleStep({ title, duration, speaker }) {
  return (
    <li className="mb-10 mt-5 ml-6">
      <span className="absolute flex items-center justify-center w-8 h-8  rounded-full -left-4 ring-4 ring-white  ">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="100"
          height="100"
          viewBox="0 0 100 100"
        >
          <circle
            cx="50"
            cy="50"
            r="40"
            fill="#F1DB2F"
            stroke="black"
            strokeWidth="2"
          />

          <circle cx="50" cy="50" r="2" fill="black" />

          <line
            x1="50"
            y1="50"
            x2="50"
            y2="30"
            stroke="black"
            strokeWidth="4"
            stroke-linecap="round"
          />

          <line
            x1="50"
            y1="50"
            x2="65"
            y2="50"
            stroke="black"
            strokeWidth="3"
            stroke-linecap="round"
          />

          <line
            x1="50"
            y1="50"
            x2="50"
            y2="70"
            stroke="red"
            strokeWidth="2"
            stroke-linecap="round"
          />
        </svg>
      </span>
      <div className="space-y-2">
        {" "}
        <h3 className=" font-bold leading-tight capitalize">{title}</h3>
        <p className="text-gray-400">{duration}</p>
        {speaker && (
          <p className="text-gray-600">
            {" "}
            <span className="font-bold capitalize">
              Speaker(s)/Facilitator(s):{" "}
            </span>
            {speaker}
          </p>
        )}
      </div>
    </li>
  );
}

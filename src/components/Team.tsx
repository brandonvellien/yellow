import Image from "next/image";
import { TeamMemberData } from "@/sanity/lib/fallbackData";

interface TeamProps {
  team: TeamMemberData[];
}

export default function Team({ team }: TeamProps) {
  return (
    <section id="team">
      <h2 className="label">Our team</h2>
      <div className="team">
        {team.map((member) => (
          <div key={member._id || member.name} className="col">
            <div className="cell">
              <Image
                src={member.photoUrl}
                alt={`Portrait de ${member.name}, ${member.role}`}
                fill
                sizes="(max-width: 860px) 100vw, 50vw"
                style={{ objectFit: "cover" }}
              />
              <div className="cap">
                <h3>{member.name}</h3>
                <div className="role">{member.role}</div>
              </div>
            </div>
            <p>{member.bio}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

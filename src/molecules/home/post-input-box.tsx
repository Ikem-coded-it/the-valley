import Avatar from "@/components/avatar"

export default function PostInputBox() {
    return(
        <section className="w-full h-20 px-[32px] py-4 bg-[#FFFFFF] rounded-[8px]">
            <div className="w-full h-full flex justify-start items-center gap-[21px]">
                <Avatar avatarURL="/avatar.jpg"/>

                <form className="h-full grow shrink">
                    <input
                    className="h-full w-full bg-[#F6F7F9] border-[1px] border-[#D3D9E4] rounded-[8px] py-3 px-4"
                    placeholder="Write here..."
                    name="post"
                    />
                </form>
            </div>
        </section>
    )
}
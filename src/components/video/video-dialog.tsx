import { Dialog, DialogContent, DialogDescription, DialogTitle } from '@/components/ui/dialog'

type VideoDialogProps = {
  open: boolean
  onOpenChange: (open: boolean) => void
  title: string
  description: string
  /** YouTube video id. The player is only mounted while the dialog is open, so nothing loads until someone presses play. */
  youtubeId: string
}

/** Wide modal player. Uses the privacy-enhanced YouTube domain, so no tracking cookies are set before playback. */
export function VideoDialog({
  open,
  onOpenChange,
  title,
  description,
  youtubeId,
}: VideoDialogProps) {
  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="w-[min(960px,calc(100vw-32px))] overflow-hidden">
        <div className="aspect-video w-full bg-night">
          <iframe
            className="size-full border-0"
            src={`https://www.youtube-nocookie.com/embed/${youtubeId}?rel=0&modestbranding=1`}
            title={title}
            allow="encrypted-media; picture-in-picture; fullscreen"
            allowFullScreen
          />
        </div>
        <div className="grid gap-2 p-6 md:p-8">
          <DialogTitle asChild>
            <h3 className="mr-h3 m-0">{title}</h3>
          </DialogTitle>
          <DialogDescription asChild>
            <p className="m-0 text-content-2">{description}</p>
          </DialogDescription>
        </div>
      </DialogContent>
    </Dialog>
  )
}
